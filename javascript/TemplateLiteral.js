function start(){
    let firstName = "John";//variable
    let lastName = "Doe";

    let text = `Welcome ${firstName}, ${lastName}!`;

    document.getElementById("demo").innerHTML = text;

    let price = 10;//expression
    let VAT = 0.25;
    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

    document.getElementById("demo2").innerHTML = total;

    let header = "Template Strings";//html template
    let tags = ["template strings", "javascript", "es6"];

    let html = `<h2>${header}</h2><ul>`;

    for (const x of tags) {
        html += `<li>${x}</li>`;
    }

    html += `</ul>`;
    document.getElementById("demo3").innerHTML = html;
}

window.addEventListener("load",start,false);