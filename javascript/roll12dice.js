let freq1=0;
let freq2=0;
let freq3=0;
let freq4=0;
let freq5=0;
let freq6=0;
let totalDice=0;

function start(){
    let button=document.getElementById("rollButton");
    button.addEventListener("click",rollDice,false);
}
function rollDice(){
    let face;
    for(let i=0;i<12;i++){
        face=Math.floor(1+Math.random()*6);
        tallyRolls(face);
        ++totalDice;
    }
    updateFreqTable();
}

function tallyRolls(face){
    switch(face){
        case 1:
            ++freq1;
            break;
        case 2:
            ++freq2;
            break; 
        case 3:
            ++freq3;
            break;
        case 4:
            ++freq4;
            break;  
        case 5:
            ++freq5;
            break;
        case 6:
            ++freq6;
            break; 
    }
}

// update frequency table in the page
function updateFreqTable()
{
    let tableDiv = document.getElementById("frequencyTableDiv");
    //取得與設定 div 內容，透過 innerHTML 屬性 值為 HTML 片段
    tableDiv.innerHTML = "<table>" +
    "<caption>Die Rolling Frequencies</caption>" +
    "<thead><th>Face</th><th>Frequency</th>" +
    "<th>Percent</th></thead>" +
    "<tbody><tr><td>1</td><td>" + freq1 + "</td><td>" +
    formatPercent(freq1 / totalDice) + "</td></tr>" +
    "<tr><td>2</td><td>" + freq2 + "</td><td>" +
    formatPercent(freq2 / totalDice) + "</td></tr>" +
    "<tr><td>3</td><td>" + freq3 + "</td><td>" +
    formatPercent(freq3 / totalDice) + "</td></tr>" +
    "<tr><td>4</td><td>" + freq4 + "</td><td>" +
    formatPercent(freq4 / totalDice) + "</td></tr>" +
    "<tr><td>5</td><td>" + freq5 + "</td><td>" +
    formatPercent(freq5 / totalDice) + "</td></tr>" +
    "<tr><td>6</td><td>" + freq6 + "</td><td>" +
    formatPercent(freq6 / totalDice) + "</td></tr>" +
    "</tbody></table>";
} // end function updateFrequencyTable

function formatPercent(value){
    value *=100;
    return value.toFixed(2);
}

window.addEventListener("load" ,start,false);