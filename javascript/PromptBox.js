let name;//建議用let 而不是var,let keyword allows you to declare a variable with block scope.
//read the name from the prompt as a string
{
    let firstNum;//string
    let SecondNum;//string
    let num1;//integer
    let num2;//integer
    let sum;
}
name=window.prompt("please enter name");
firstNum=window.prompt("please enter first number");
SecondNum=window.prompt("please enter second number");
sum=firstNum+SecondNum;
document.writeln("<h1>Hello "+ name +", Welcome to javascript "+"programming!</h1>");
document.writeln("<h1>(Didn't use parseInt)The sum is"+ sum +"</h1>");
sum=parseInt(firstNum)+parseInt(SecondNum);
document.writeln("<h1>(Use parseInt)The sum is"+ sum +"</h1>");