/*
Topic: Exception Handling

In JavaScript, exception handling allows you to gracefully handle errors and unexpected situations that may occur in your code. 

When an error occurs in a JavaScript program, an exception is thrown.
If the exception is not caught (handled), it will cause the program to terminate abruptly and display an error message.

To handle exceptions in JavaScript, you can use the try...catch statement.

The try block contains the code that may throw an exception.

The catch block is used to catch and handle the exception.

If an exception occurs in the try block, the catch block is executed, and the error object is passed to the catch block as a parameter.

Here's an example of exception handling in JavaScript:
*/

try {
    // Code that may throw an exception
    throw new TypeError("Invalid argument");
} catch (error) {
    // Code to handle the exception
    if (error instanceof TypeError) {
        console.error("TypeError occurred:", error.message);
    } else {
        console.error("An error occurred:", error.message);
    }
}


