/*
Topic: Variables

Keywords: let, var and const

let and var are not the same in JavaScript. They are both used to declare variables, but they have some differences in terms of scope and hoisting.

var is the older way of declaring variables in JavaScript. When you declare a variable with var, 
it is function-scoped, meaning it is accessible within the function where it is declared. 

If a var variable is declared outside of any function, it becomes a global variable and is accessible throughout the entire program. 

Additionally, var variables are hoisted, which means they are moved to the top of their scope during the compilation phase, 
allowing you to use them before they are declared.

On the other hand, let was introduced in ES6 (ECMAScript 2015) as a block-scoped variable declaration. 

Variables declared with let are only accessible within the block where they are declared, such as within a loop or an if statement. 
Unlike var, let variables are not hoisted, so you cannot use them before they are declared.

In your code snippet, the variable y is declared without using let or var. This is not recommended, as it creates an implicit global variable.
It's best practice to always use let or var to explicitly declare your variables and avoid polluting the global scope.
*/

// Example using let
let x = 10;
if (true) {
    let x = 20;
    console.log(x); // Output: 20
}
console.log(x); // Output: 10


// Example using var
var y = 10;
if (true) {
    var y = 20;
    console.log(y); // Output: 20
}
console.log(y); // Output: 20


// Example using const
const z = 10;
if (true) {
    const z = 20;
    console.log(z); // Output: 20
}
console.log(z); // Output: 10

