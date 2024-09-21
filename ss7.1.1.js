//bai 1
let inputPhysics;
let inputChemistry;
let inputBiology;
inputPhysics = prompt("Enter Physics");
let a = parseInt(inputPhysics);
inputChemistry = prompt("Enter Chemistry");
let b = parseInt(inputChemistry);
inputBiology = prompt("Enter Biology");
let c = parseInt(inputBiology);
let total =(a+b+c)/3 ;
document.write("The area is: " + total);
//bai 2

let inputCelsius = prompt("Enter Celsius");
let C = parseInt(inputCelsius);
let F =(9/5*C)+32;
document.write("The Fahrenheit is: " + F);
//BAI 3,4
const PI =3.14;
let inputRadius = prompt("Enter Radius");
let R = parseInt(inputRadius);
let C1 = 2*PI*R;
let S = PI*R*R;
document.write("The perimeter is: " + C1);
document.write("The area is: " + S);
