const points = [40, 100, 1, 5, 25, 10];
points2 =[1,35,-96,25,10,789,999,-99663,255];
document.getElementById("demo").innerHTML = points;  

function myFunction1() {
  points.sort();
  document.getElementById("demo").innerHTML = points;
}
function myFunction2() {
  points.sort(function(a, b){return a - b});//不使用comparefunction會依照字母排
  document.getElementById("demo").innerHTML = points;
}

points2_asc=points2.toSorted(function(a, b){return a - b});
points2_dsc=points2.toSorted(function(a, b){return b - a});
document.getElementById("Ascending").innerHTML=points2_asc;
document.getElementById("Descending").innerHTML=points2_dsc;
document.getElementById("min").innerHTML=Math.min.apply(null,points2);
document.getElementById("max").innerHTML=Math.max.apply(null,points2);