
console.log(document.cookie)
var canvas = document.querySelector("#myc")
var c = canvas.getContext("2d")
var moneytext = document.querySelector("#money")
canvas.width = 600
canvas.height = 600

var superpower = false
var superspeed = false
var superdua = false
var spawnspeed = 1000
var life = 5
var coin = 0 
var rl = 0

console.log(coin)
var finalscore = 0
var randpotion = 0

var btnleft = document.querySelector(".btnleft")
var btnright = document.querySelector(".btnright")
var playbtn = document.querySelector("#playbtn")
var play = false
var pauseable = false
var cplay = false
var egg = []
var score = 0
var playersprites 
var eggimg = new Image()
eggimg.src = "media/egg.png"

var basketimg = new Image()
basketimg.src = "media/basket.png"

var truckright = new Image()
truckright.src = "media/truckright.png"

var truckleft = new Image()
truckleft.src = "media/truckleft.png"

var bgimg = new Image()
bgimg.src = "media/bg.png"

var cabeimg = new Image()
cabeimg.src = "media/cabe.png"

var melonimg = new Image()
melonimg.src = "media/melon.png"

var heartimg = new Image()
heartimg.src = "media/heart.png"

var getpotion = new Audio()
getpotion.src = "media/getpotion.mp3"
getpotion.volume = 0.5

var catchaudio = new Audio()
catchaudio.src = "media/eggcatch.mp3"
catchaudio.volume = 1.0

var fallaudio = new Audio()
fallaudio.src = "media/eggfalls.mp3"
fallaudio.volume = 0.1

var overaudio = new Audio()
overaudio.src = "media/gameover.mp3"
overaudio.volume = 1.0

var bgm = new Audio()
bgm.src = "media/bgm.mp3"
bgm.volume = 0.2

var mytime = setTimeout(drawpotion,3000)
var timeheal = setTimeout(dropheart,15000)

var sound = []
var skin = 1
var skinbasik = [basketimg,basketimg]
var skintruk = [truckleft,truckright]



function dropheart(){
    if(play){
        egg.push(new Egg(60,randnum(10,570),-20, heartimg,"heal"))
    }
    clearTimeout(timeheal)
    timeheal= setTimeout(dropheart,15000)
}

function drawpotion(){
    randpotion = randnum (1,10)
    if(!superspeed && play){
        if(randpotion <=5){
            egg.push(new Egg(60,randnum(10,570),-20, cabeimg,"speed"))
        }else if(randpotion > 5){
            egg.push(new Egg(60,randnum(10,570),-20, melonimg,"duakali"))
        }

    }   
    spawnspeed = randnum(200,1100)
    clearTimeout(mytime)
    mytime = setTimeout(drawpotion,6000)
}
var intervals 






playbtn.addEventListener("click", () =>{
    
    bgm.play()
    click = true
    if(play && click){
        document.querySelector("#playtit").src = "media/playbtn.png"
        console.log("mati")
        play = false
        bgm.pause()
        click = false
        clearInterval(intervals)
        pauseable = true
    }else if(!play && click == true){
        
        moneytext.innerHTML = coin
        if(life <= 0){
            clearInterval(intervals)
            life = 5
            pauseable = false
            egg.forEach(index => {
                egg.splice(index, egg.length)
            });
            finalscore = 0
            score = 0
            
            click = false
        }
        clearInterval(intervals)
        document.querySelector("#playtit").src = "media/pausebtn.png"
        intervals = setInterval(addEgg,spawnspeed)
        click = false
        play = true
    }
})

function addEgg(){
    egg.push(new Egg(40,randnum(10,570), 20,eggimg))
}

function randnum(min, max) {
    return Math.random() * (max - min) + min;
}

function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y) + b.height) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x) + b.width)
    );
}

function setup(){
    
}

function update(){
    
    
    if(!getCookie("money")){
        setCookie("money","0",350 * 100)
    }
    if(getCookie("money")){
        coin = parseInt(getCookie("money"))
    }
        if(bgm.currentTime == bgm.duration){
            bgm.currentTime = 0
        }
    if(play){
        

        player.move()
        egg.forEach(index =>{
        index.move()
        if(index.y > 600 && !index.potion){
            egg.splice(index,1)
            fallaudio.play()
            if(score > 0 ){
                score-= 2
                       
            }
            life --
        }



        if(isCollide(player,index)){
            catchaudio.play()
            
            egg.splice(index,1)
            if(superdua){
                score += 2
            }else{
                score ++
            }
                
            if(index.potion == "speed" && !superspeed ){
                superspeed = true
                getpotion.play()
                
                setTimeout(()=>{
                    superspeed = false
                },5000)
            }
            if(index.potion == "duakali" && !superdua ){
                superdua = true
                getpotion.play()
                
                setTimeout(()=>{
                    superdua = false
                },5000)
            }
            if(index.potion == "heal"){
                life++
                getpotion.play()
            }
            
        }
        if(superspeed){
            
            player.speed = 10
        }else{
            player.speed = 5
        }
        
    })
    }
      
}


function draw(){
    c.clearRect(0,0,canvas.width,canvas.height)
    c.scale(1,1)
    
    

    c.fillStyle = "#609090"
    c.fillRect(0,0,canvas.width,canvas.height)
    bgimg.onload = drawbg(bgimg)
    
    egg.forEach(index =>{
        index.draw()
    })

    
    player.draw()
    c.scale(1,1)

    

    if(!play && pauseable){
        c.fillStyle = "rgba(0,0,0,0.8)"
        c.fillRect(0,0,canvas.width,canvas.height)
        c.fillStyle = "#fff"
        c.font = "70px serif"
        c.fillText('PAUSE',190,300)
    }

    c.fillStyle = "#fff"
    c.font = "40px serif"
    c.fillText('Score : ' +score,10,50)
    c.fillText('Life : ' +life,10,100)

    if(life <= 0){
        clearInterval(intervals)
        c.fillStyle = "rgba(0,0,0,0.8)"
        c.fillRect(0,0,canvas.width,canvas.height)
        c.fillStyle = "#fff"
        c.font = "70px serif"
        c.fillText('GAME OVER',100,200)
        c.font = "30px serif"
        coin += score
        setCookie("money",coin,350 * 10)
        finalscore  += score
        c.fillText('-You Earn ' + finalscore + " coin ",100,290)
        c.fillText('-Now You Have ' + coin + " coin ",100,340)
        if(play){
            overaudio.play()
        }
        bgm.pause()
        score = 0
        play = false
        pauseable = false
        document.querySelector("#playtit").src = "media/playbtn.png"
    }
}

function drawbg(image){
    c.drawImage(image,0,0,900,600)
}
var player
function skinplayer(noskin){
    if(noskin == 0){
        var skin = skinbasik
    }else if(noskin ==1){
        var skin = skintruk
    }


     player = new Player(canvas.width / 2 - 45, canvas.height - 40,skin,5)
}
skinplayer(skin)

function loop(){
    update()
    draw()
}

addEventListener("touchstart", (e) =>{
    if(e.target == btnleft){
        player.left = true
    }
    if(e.target == btnright){
        player.right = true
    }
})
addEventListener("touchend", (e) =>{
    if(e.target == btnleft){
        player.left = false
    }
    if(e.target == btnright){
        player.right = false
    }
})


window.setInterval(loop,1000/60)