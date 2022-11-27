
var PlayBtn = document.querySelector(".playbtn-img")

var timelinerindu = document.querySelector("#timeline-rindu")
var progresbarrindu = document.querySelector(".progres-bar-rindu")

var timelinedance = document.querySelector(".timeline-dance")
var progresbardance = document.querySelector(".progres-bar-dance")

var timelineteen = document.querySelector(".timeline-teen")
var progresbarteen = document.querySelector(".progres-bar-teen")

var timelineprom = document.querySelector(".timeline-prom")
var progresbarprom = document.querySelector(".progres-bar-prom")

var timelineevery = document.querySelector(".timeline-every")
var progresbarevery = document.querySelector(".progres-bar-every")

var play = false
var rinduaudio = new Audio("media/Rindu.mpeg")
var rindu = false
var danceaudio = new Audio("media/dance baby.mpeg")
var dance = false
var teenaudio = new Audio("media/teenage.mpeg")
var teen = false
var promaudio = new Audio("media/prom queen.mpeg")
var prom = false
var everyaudio = new Audio("media/every summertime.mpeg")
var every = false

PlayBtn.src = "media/playbtn.png"

function Rindu(){
    var rindubtn = document.querySelector(".rindubtn")
    if(rinduaudio.paused){
        rindu = true
        play = true
    }else{
        rindu = false
        play = false
    }
    changebtn(rindubtn)
    musik()
}
function Dance(){
    var dancebtn = document.querySelector(".dancebtn")
    if(danceaudio.paused){
        dance = true
        play = true
    }else{
        dance = false
        play = false
    }
    changebtn(dancebtn)
    musik()
}
function Teen(){
    var teenbtn = document.querySelector(".teenbtn")
    if(teenaudio.paused){
        teen = true
        play = true
    }else{
        teen = false
        play = false
    }
    changebtn(teenbtn)
    musik()
}
function Prom(){
    var prombtn = document.querySelector(".prombtn")
    if(promaudio.paused){
        prom = true
        play = true
    }else{
        prom = false
        play = false
    }
    changebtn(prombtn)
    musik()
}
function Every(){
    var everybtn = document.querySelector(".everybtn")
    if(everyaudio.paused){
        every = true
        play = true
    }else{
        every = false
        play = false
    }
    changebtn(everybtn)
    musik()
}






function musik() {
    if (rindu) {
        out(rinduaudio,progresbarrindu,timelinerindu);
        rinduaudio.play()
    }else{
        rinduaudio.pause()
    }
    
    if(dance){
        out(danceaudio,progresbardance,timelinedance)
        danceaudio.play()
    }else {
        danceaudio.pause()
    }

    if(teen){
        out(teenaudio,progresbarteen,timelineteen)
        teenaudio.play()
    }else {
        teenaudio.pause()
    }

    if(prom){
        out(promaudio,progresbarprom,timelineprom)
        promaudio.play()
    }else {
        promaudio.pause()
    }
    if(every){
        out(everyaudio,progresbarevery,timelineevery)
        everyaudio.play()
    }else {
        everyaudio.pause()
    }
}

function changebtn(btn){
    if (play) {
        btn.src = "media/pause.png"
    } else {
        btn.src = "media/playbtn.png"
    }
}


function out(audio,progresbar,timeline){
    var update = setInterval(function () {
        var mins = Math.floor(audio.currentTime / 60);
        var secs = Math.floor(audio.currentTime % 60);
        var secs2 = Math.floor(audio.currentTime % 60);
        var minsDu = Math.floor(audio.duration / 60);
        var secsDu = Math.floor(audio.duration % 60);
    
        var persec1 = mins * 60 + secs
        var persec2 = minsDu * 60 + secsDu
    
        var persentage =  persec1  / persec2  * 100
        if (secs < 10) {
            secs = '0' + String(secs);
        }
        progresbar.style.width = persentage + '%'
    
        timeline.innerHTML = mins + ':' + secs + ' / ' + minsDu + ':' + secsDu;
    }, 10);
}



