console.log('hello')

// alert('Hello this is Kimmie')

// Variables


let b = 'smoothie';
console.log(b);

let someNumber = 45;
// console.log(someNumber);



// let age = prompt('What is your age?');

//document.getElementById('someText').innerHTML = age;



// numbers in javascript
let num1 = 10;

// increment num1 by 1
num1++;

// Decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainder %
console.log(num1 % 5);

// Increment/decrement by 10
num1 += 10;
console.log(num1);

/* Functions
1. create a function
2. Call the function
*/

// Create function
function fun() {
    console.log('This is a function')
}

// Call function
fun();

/* Let's create a function that take in a name
 and says hello followed by your name

For example

Name: Kimmie
Return: Hello Kimmie
*/
/*
function  greeting(yourName) {

   let result = 'Hello,' + ' '+ yourName + '!' ; // String Concatenation
   console.log(result);
}
let name = prompt('What is your name?');
greeting(name);
*/
// How do arguments work in function?
// How do we add 2 numbers together in a function?

function sumNumbers(num1, num2){
    let result = num1 + num2;
    console.log(result)
}


sumNumbers(10, 10);

/* While loops

let num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

*/

// For loop
for (let num = 0; num <= 100; num++) {
    console.log(num);
}

// Data types
let yourAge = 18;                                      // number
let yourName = 'Bob';                                   //string
let name = {first: 'Jane', last: 'Doe'};               // Object
let truth = false;                                     // Boolean
let groceries = ['apple', 'banana','oranges'];         // Array
let random;                                           // Undefined
let nothing = null;                                   // Value null

// Strings in Javascript (common methods)
let fruit = 'banana,apple,orange,blackberry';
let moreFruits = 'banana\napple';                     // New line

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(',')); // split by a comma
console.log(fruit.split('')); // split by character

// Array
let fruits = ['banana', 'apple', 'orange', 'pineapple'];
fruits = new Array('banana', 'apple', 'orange', 'pineapple');
alert(fruits[2]);





