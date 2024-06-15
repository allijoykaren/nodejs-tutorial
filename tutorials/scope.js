/*
Topic: Function Scope

In JavaScript, function scope refers to the visibility and accessibility of variables within a function. 
When you declare a variable inside a function using the var keyword, that variable is only accessible within the function itself. 
It is not accessible outside of the function or in any other functions defined within it.

In your code example, the variable message is declared inside the greet function using the var keyword. 
This means that message is only accessible within the greet function. 
If you try to access message outside of the function, you will get an error.
*/

function greet() {
    var message = "Hello, world!";
    console.log(message);
}

greet(); // Output: Hello, world!
console.log(message); // Output: ReferenceError: message is not defined

/*
In this example, calling the greet function will print "Hello, world!" to the console because message is accessible within the function. 
However, if you try to access message outside of the function, you will get an error because it is not defined in the outer scope.

Function scope helps to encapsulate variables and prevent them from interfering with other parts of your code. 
It also allows you to have variables with the same name in different functions without conflicts.
*/