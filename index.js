




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

console.log(coin)
var finalscore = 0
var randpotion = 0

var playbtn = document.querySelector("#playbtn")
var play = false
var cplay = false
var egg = []
var score = 0

var eggimg = new Image()
eggimg.src = "media/egg.png"

var basketimg = new Image()
basketimg.src = "media/basket.png"

var bgimg = new Image()
bgimg.src = "media/bg.png"

var cabeimg = new Image()
cabeimg.src = "media/cabe.png"

var melonimg = new Image()
melonimg.src = "media/melon.png"

var getpotion = new Audio()
getpotion.src = "media/getpotion.mp3"
getpotion.volume = 0.5

var catchaudio = new Audio()
catchaudio.src = "media/eggcatch.mp3"
catchaudio.volume = 1.0

var fallaudio = new Audio()
fallaudio.src = "media/eggfalls.mp3"
fallaudio.volume = 0.1

var bgm = new Audio()
bgm.src = "media/bgm.mp3"
bgm.volume = 0.2

var mytime = setTimeout(drawpotion,3000)

var sound = []


function drawpotion(){
    randpotion = randnum (1,10)
    if(!superspeed && play){
        if(randpotion <=5){
            egg.push(new Egg(randnum(10,570),-20, cabeimg,"speed"))
        }else if(randpotion > 5){
            egg.push(new Egg(randnum(10,570),-20, melonimg,"duakali"))
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
        document.querySelector("#playtit").innerHTML = "PLAY"
        console.log("mati")
        play = false
        bgm.pause()
        click = false
        clearInterval(intervals)
        
    }else if(!play && click == true){
        
        moneytext.innerHTML = coin
        if(life <= 0){
            clearInterval(intervals)
            life = 5
            
            egg.forEach(index => {
                egg.splice(index, egg.length)
            });
            finalscore = 0
            score = 0
            click = false
        }
        clearInterval(intervals)
        document.querySelector("#playtit").innerHTML = "PAUSE"
        intervals = setInterval(addEgg,spawnspeed)
        click = false
        play = true
    }
})

function addEgg(){
    egg.push(new Egg(randnum(10,570), 20,eggimg))
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
        // if(catchaudio.currentTime == catchaudio.duration){
        //     catchaudio.pause()
        //     catchaudio.currentTime = 0
        // }
        // if(fallaudio.currentTime == fallaudio.duration){
        //     fallaudio.pause()
        //     fallaudio.currentTime = 0
        // }
        // if(getpotion.currentTime  == getpotion.duration){
        //     getpotion.pause()
        //     getpotion.currentTime = 0
        // }

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
                score-= 3
                       
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
    


    c.fillStyle = "#609090"
    c.fillRect(0,0,canvas.width,canvas.height)
    bgimg.onload = drawbg(bgimg)
    
    egg.forEach(index =>{
        index.draw()
    })
    player.draw()
    
    if(life <= 0){
        clearInterval(intervals)
        c.fillStyle = "#fff"
        c.font = "70px serif"
        c.fillText('GAME OVER',100,200)
        c.font = "30px serif"
        coin += score
        setCookie("money",coin,350 * 10)
        finalscore  += score
        c.fillText('You Earn ' + finalscore + " coin ",100,300)
        c.fillText('Now You Have ' + coin + " coin ",100,400)
        score = 0
        play = false
        document.querySelector("#playtit").innerHTML = "TRY AGAIN"
    }

    c.fillStyle = "#fff"
    c.font = "40px serif"
    c.fillText('Score : ' +score,10,50)
    c.fillText('Life : ' +life,10,100)
}

function drawbg(image){
    c.drawImage(image,0,0,900,600)
}
var player = new Player(canvas.width / 2 - 45, canvas.height - 40,basketimg,5)
function loop(){
    update()
    draw()
}




window.setInterval(loop,1000/60)