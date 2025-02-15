let images=["friedrice","laksa","porridge","yaki","bento","gratin","soup","pizza"]
// 注册按钮监听器并获取img元素
function start()
{   //addEventListener has 3 arguments
    //the first is the name of the event for which we’re registering a handler
    //the second is the function that will be called to handle the event
    //the last argument is typically false
    let button = document.getElementById("rollButton");
    button.addEventListener("click", rollDice, false);
    die1Image = document.getElementById("die1");
    die2Image = document.getElementById("die2");
    die3Image = document.getElementById("die3");
    die4Image = document.getElementById("die4");
} // 结束函数start

function rollDice(){
    setImage(die1Image);
    setImage(die2Image);
    setImage(die3Image);
    setImage(die4Image);
}
// 设置骰子的图像源
function setImage(dieImg) {
    // 使用相對路徑存取 image 資料夾中的照片
    var dieValue = Math.floor( Math.random() * 8);//0-7
    dieImg.setAttribute("src", "../images/" + images[dieValue] + ".jpg");
    dieImg.setAttribute("alt", "die image with " + dieValue + " spot(s)");
} // 结束函数setImage


window.addEventListener("load", start, false);