function start(){
    let arr1=new Array(5);
    let arr2=[];
    let length=arr1.length;
    let arr3=["Cyan","magenta","yellow","black"];
    let arr4=[2,4,6,8];
    let arr5=[2, , ,8];
    for(let i=0;i<length;i++){
        arr1[i]=i;
    }
    for(let i=0;i<5;i++){
        arr2[i]=i;
    }
    outputArray("array1:",arr1,document.getElementById("out1"));
    outputArray("array2:",arr2,document.getElementById("out2"));
    outputArray("array3:",arr3,document.getElementById("out3"));
    outputArray("array4:",arr4,document.getElementById("out4"));
    outputArray("array5:",arr5,document.getElementById("out5"));
}

function outputArray(heading,array,output){
    let content="<h1>"+heading+"</h2><table>"+"<thead><th>index</th><th>value</th></thead><tbody>";
    let length=array.length;
    for(let i=0;i<length;i++){
        content +="<tr><td>"+i+"</td><td>"+array[i]+"</td></tr>"
    }
    content+="</tbody></table>";
    output.innerHTML=content;
}

window.addEventListener("load",start,false);