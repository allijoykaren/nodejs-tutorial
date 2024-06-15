/*
Topic: Functions

In JavaScript, a function is a reusable block of code that performs a specific task or calculates a value. 
It allows you to group related code together and execute it whenever needed. 
Functions are an essential part of JavaScript programming as they help in organizing and modularizing code.

Functions in JavaScript have the following components:

Function Keyword: The keyword "function" is used to declare a function in JavaScript.

Function Name: A function can have a name that is used to identify and call the function later. 
The name should follow the rules for naming variables in JavaScript.

Parameters: Parameters are placeholders for values that can be passed into a function when it is called. 
They are listed inside parentheses after the function name. Parameters allow you to make a function more flexible and reusable by accepting different inputs.

Function Body: The function body contains the code that is executed when the function is called. 
It is enclosed within curly braces {}. This is where you write the logic or instructions that define what the function does.

Return Statement: A function can optionally return a value using the return statement. 
The return statement specifies the value that the function will output when it is called. 
If a function doesn't have a return statement, it will return undefined by default.

Here's an example of a simple function in JavaScript:

In this example, the greet function takes a name parameter and returns a greeting message.
The function is called with the argument "John", and the returned value is printed to the console using console.log().
*/

function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("John")); // Output: Hello, John!

/*
Arrow functions are a more concise way to write functions in JavaScript.
*/

const multiply = (num1, num2) => { return num1 * num2; };

console.log(multiply(2, 3)); // Output: 6

/*
In this syntax, the function keyword is used to declare a function named multiply. 
The function is defined with a block of code enclosed in curly braces {}. 
This type of function declaration is hoisted, which means it can be called before it is defined in the code.
*/

