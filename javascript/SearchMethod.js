let str="abcdefghijklmnopqrstuvwxyzabcdefghijklmn";
function search(){
    let inputfield=document.getElementById("inputfield");
    let input = inputfield.value;
    document.getElementById("results").innerHTML =
    "<p>First occurrence is located at index " +
    str.indexOf(inputfield.value) + "</p>" +
    "<p>Last occurrence is located at index " +
    str.lastIndexOf(inputfield.value) + "</p>" +
    "<p>First occurrence from index 12 is located at index " +
    str.indexOf(inputfield.value, 12) + "</p>" +
    "<p>Last occurrence from index 12 is located at index " +
    str.lastIndexOf(inputfield.value, 12) + "</p>";
    // Additional Search Methods
    let additionalResultsHTML =
        "<p>Includes character? " + (str.includes(input) ? "Yes" : "No") + "</p>" +
        "<p>Character at position 5: " + str.charAt(5) + "</p>" +
        "<p>Unicode value at position 5: " + str.charCodeAt(5) + "</p>";

    document.getElementById("additionalResults").innerHTML = additionalResultsHTML;
}
// end function buttonPressed


function start(){
    let searchbutton=document.getElementById("searchbutton");
    searchbutton.addEventListener("click",search,false);
}

window.addEventListener("load",start,false);