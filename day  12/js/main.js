var myName = "Hagar Mohamed";
var myAge = 21;
var myCity = "Zagazig";

console.log(myName);
console.log(myAge);
console.log(myCity);

//  Hoisting
console.log(a);
var a = 5;

test();
function test(){
  console.log("this is hoisting test");
}

// Loops

for(var i=0; i<5; i++){
  console.log(i);
}

var foods = ["pasta", "pizza", "rice"];
for(var j=0; j<foods.length; j++){
  console.log(foods[j]);
}

var k = 0;
while(k < 3){
  console.log("I love " + foods[k]);
  k++;
}

//  Functions

function sayHello(name){
  console.log("Hello " + name);
}
sayHello("Hagar");

var calc = function(x, y){
  return x + y;
}
console.log(calc(10, 20));

function getInfo(){
  return "I am student from Zagazig";
}
console.log(getInfo());

// 4 - Object

var person = {
  fullName: "Hagar Mohamed",
  age: 21,
  city: "Zagazig",
  gender: "Female",
  isStudent: true,
  eat: function(meal){
    console.log("Eating " + meal);
  }
};

console.log(person.fullName);
console.log(person.age);
person.eat("pasta");