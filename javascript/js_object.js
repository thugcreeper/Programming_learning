function Person(first,last,age,eye){//constructor
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
}
function start(){
    //The most common way to protect an object from being changed is by using the const keyword.
    const myFather = new Person("John", "Doe", 50, "blue");
    // Create an empty Object
    const person = {};//{}=new Object()

    // Add Properties
    person.firstName = "John";
    person.lastName = "Doe";
    person.age = 50;
    person.eyeColor = "blue"; 

    // Display Data from Object
    document.getElementById("demo").innerHTML =
    person.firstName + " is " + person.age + " years old.";
    document.getElementById("demo2").innerHTML =
    "My father is " + myFather.age + " and is "+myFather.nationality+"."; 
}

window.addEventListener("load",start,false);