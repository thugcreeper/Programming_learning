let name;
let now = new Date();
let hour = now.getHours();

name = window.prompt("Please enter name");
if (hour < 12) {
    document.writeln("<h1>Good Morning, ");
} else if (hour < 18) {
    document.writeln("<h1>Good Afternoon, ");
} else {
    document.writeln("<h1>Good Evening, ");
}

document.writeln(name + " Welcome</h1>");
