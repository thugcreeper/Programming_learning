let interval=null;
let speed=6;
let count=0;

function run(){
    count+=speed;
    if(count>=620){
        window.clearInterval(interval);
        interval=null;
    }
    let bigimage=document.getElementById("imgcover");
    bigimage.setAttribute("style","width: "+(0.7656*count+"px;")+"height: "+(count+"px;"));
}

function display(imgfile){
    if(interval)
        return;
    let bigimage=document.getElementById("imgcover");
    bigimage.setAttribute("style","width:0px; height:0px;");
    bigimage.setAttribute("src","../images/"+imgfile);
    bigimage.setAttribute("alt","Large version of "+imgfile);
    count=0;
    interval=window.setInterval("run()",10);//使用 setInterval 每 10 毫秒執行一次 run 函數。
}

function start(){
    document.getElementById("img1").addEventListener("click",function(){display("draw2.jpg");},false);
    document.getElementById("img2").addEventListener("click",function(){display("draw3.jpg");},false);
    document.getElementById("img3").addEventListener("click",function(){display("draw4.jpg");},false);
    document.getElementById("img4").addEventListener("click",function(){display("draw5.jpg");},false);
    document.getElementById("img5").addEventListener("click",function(){display("azur0.jpg");},false);
    document.getElementById("img6").addEventListener("click",function(){display("azur1.jpg");},false);
}

window.addEventListener("load",start,false);