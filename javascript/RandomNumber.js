let value;
document.writeln("<p>Math.random() 這個方法會生成一個介於0（包括0）到1（不包括1）之間的隨機浮點數</p>")
document.writeln("<p>Random Numbers</p><ul>")
for(let i=0;i<30;i++){
    value=Math.floor(1+Math.random()*6)//random number from 0 to 6
    document.writeln("<li>"+value+"</li>");
}
document.writeln("</ul>")
