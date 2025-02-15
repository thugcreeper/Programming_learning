let button_back;
let button_playandpause;
let button_ff;
let video;

function playpause() { 
    if (video.paused) 
      video.play(); 
    else 
      video.pause(); 
} 

function back(){
    video.currentTime -= 10
}

function fast_forward() {
    video.currentTime += 10;
}

function start(){
    button_back=document.getElementById("back");//get id ensure the element is load
    button_playandpause=document.getElementById("playandpause");
    button_ff=document.getElementById("ff");
    video=document.getElementById("video1");
    button_back.addEventListener("click",back,false);
    button_playandpause.addEventListener("click",playpause,false);
    button_ff.addEventListener("click",fast_forward,false);
}

window.addEventListener("load",start,false);