function start(){
    let s="zebra";
    let s2="AbCdEfG";
    let s3="飛龍一般的"
    let result="";
    result+="<p>Character at index 0 in \""+s+"\" is "+s.charAt(0)+"</p>";
    result+="<p>Character code at index 0 in \""+s+"\" is "+s.charCodeAt(0)+"</p>";
    result+="<p>Character at index 0 in \""+s3+"\" is "+s3.charAt(0)+"</p>";
    result+="<p>Character code at index 0 in \""+s3+"\" is "+s3.charCodeAt(0)+"</p>";
    result+="<h2>"+String.fromCharCode(87,79,82,68)+" String.fromCharCode(87,79,82,68)</h2>"
    result+="<p>Tolowercase of \""+s+"\" is "+s.toLowerCase()+"</p>";
    result+="<p>Touppercase of \""+s+"\" is "+s.toUpperCase()+"</p>";
    document.getElementById("result").innerHTML=result;
}

window.addEventListener("load",start,false);