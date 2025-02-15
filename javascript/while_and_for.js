{
    let total; // sum of grades
    let gradeCounter; // number of grades entered
    let grade; // grade typed by user (as a string)
    let gradeValue; // grade value (converted to integer)
    let average; // average of all grades
}
// initialization phase
total = 0; // clear total
gradeCounter = 1; // prepare to loop

// processing phase
while ( gradeCounter <= 5 ) // loop 10 times
{
    // prompt for input and read grade from user
    grade = window.prompt("Enter integer grade:", "0");

    // convert grade from a string to an integer
    gradeValue = parseInt(grade);

    // add gradeValue to total
    total = total + gradeValue;

    // add 1 to gradeCounter
    gradeCounter = gradeCounter + 1;
} // end while

function add(){
    let result = "";
    let total=0;
    for(let counter=1;counter<=10;counter++){
        total+=counter;
        if (counter == 10) {
            result += counter; // Do not add the "+" sign after the last number
            result = result + " = " +total;
        } else {
            result += counter + " + ";
        }
        
    } 
    document.getElementById("forloop").innerHTML = result;
}
// termination phase
average = total / 5; // calculate the average

// display average of exam grades
document.writeln(
    "<h1>Class average is " + average + "</h1>");

let num1=12.52;
let num2=-14.8555;
let str="a string";
let str2="123abc";
document.writeln("<h1>use parseInt to 12.52,-14.8555,\"a string\",\"123abc\"</h1><br>");
document.writeln(parseInt(num1)+"<br>"); // Output: 12
document.writeln(parseInt(num2)+"<br>"); // Output: -14
document.writeln(parseInt(str)+"<br>"); // Output: NaN
document.writeln(parseInt(str2)); 

