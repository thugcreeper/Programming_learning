function splitString() {
    let string = document.getElementById("inputfield").value;
    let tokens = string.split(" ");
    let results = document.getElementById("results");
    results.innerHTML = "<p>The sentence split into words is: </p>" +
                        "<p class='indent'>" + tokens.join("</p><p class='indent'>") + "</p>"+
                        "<p>The first 10 character of the input string are: </p>"+
                        "<p class='indent'>"+string.substring(0,10)+"</p>";
}

function start() {
    let splitButton = document.getElementById("splitbutton");
    splitButton.addEventListener("click", splitString, false);
}

window.addEventListener("load", start, false);
