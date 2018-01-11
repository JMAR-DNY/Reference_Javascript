console.log(Math.floor(Math.random() * 100));
console.log(Math.ceil(43.8));
console.log(Number.isInteger(2017));

//converts degrees Kelvin to Celcius then fahrenheit
const kelvin = prompt('What is the Kelvin temperature today?');
//function to convert kelvin to celcius
function convertK2C(kelvin){
  var celcius = kelvin - 273;
  return celcius;
}

//function to convert celcius to fahrenheit
function convertC2F(celcius){
  var fahrenheit = (celcius *(9/5)+32);
  return fahrenheit;
}

var celsius = convertK2C(kelvin);
var fahrenheit = Math.floor(convertC2F(celsius));
//the floor function is called on the result set

console.log('The temperature is ' + fahrenheit + ' degrees fahrenheit');

//some basic operators
let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule += 16;

// Multiply and assign to particle below
particle *=6.02

// Increment assay by 1
assay +=1;
