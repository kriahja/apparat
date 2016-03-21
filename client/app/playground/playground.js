'use strict';


angular.module('agfOpenApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('playground', {
        url: '/playground',
        templateUrl: 'app/playground/playground.html',
        controller: 'PlaygroundCtrl'
      });
  });

var t1 = document.querySelector('#t1');
var t2 = document.querySelector('#t2');
var t3 = document.querySelector('#t3');
var t4 = document.querySelector('#t4');

function calculateAge(currentYear, birthYear)
{
 var diff = currentYear - birthYear;
  return "you are either " + (diff-1) + " or " + diff + " years old";
}
//t1.innerText =calculateAge(2016, 1989);

function calculateSupply(age, amountPerDay)
{
  // var element = document.getElementById("t2");
  var maxAge = 100;
  var amountPerYear = amountPerDay * 365;
  return "You will need " + ((maxAge - age) * amountPerYear) + " to last you until the ripe old age of " + maxAge;
}
// t2.innerHTML = calculateSupply(25, 5);
// t2.innerHTML = calculateSupply(50, 3);
// t2.innerHTML = calculateSupply(70, 7);


var radius = 14;
function calcCircumfrence()
{
  var circumference = 2*Math.PI*radius;
  console.log("The circumference is " + circumference);
}
function calcArea()
{
  var area = Math.PI*Math.pow(radius, 2)
  console.log("The area is " + area);
}
// t3.innerHTML = calcCircumfrence();
// t3.innerHTML = calcArea();

function celsiusToFahrenheit(celsius)
{
  var celsius = "C";
  //console.log(celsius + "°C is " + cTof + "°F");
  var cTof = document.getElementById("c").value * 9 / 5 + 32;
        document.getElementById("f").value = Math.round(cTof);

}
function fahrenheitToCelsius(farenheit)
{
  var farenheit = "F";
  // var fToc = ((farenheit - 32) * 5) / 9;
  // console.log(farenheit + "°F is" + fToc + "°C");

  var fToc = (document.getElementById("f").value -32) * 5 / 9;
        document.getElementById("c").value = Math.round(fToc);
}
