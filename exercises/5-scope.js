// Exercise: Function Scope

// 1. Create a variable called 'globalVariable' and assign it a value of 10.

// 2. Create a function called 'myFunction' that takes no parameters.
// Inside the function, create a variable called 'localVariable' and assign it a value of 5.
// Also, create another variable called 'globalVariable' and assign it a value of 20.

// 3. Inside the 'myFunction' function, log the value of 'localVariable' to the console.

// 4. Inside the 'myFunction' function, log the value of 'globalVariable' to the console.

// 5. Outside the 'myFunction' function, log the value of 'globalVariable' to the console.

// 6. Call the 'myFunction' function.

// 7. Outside the 'myFunction' function, log the value of 'localVariable' to the console.

// 8. Outside the 'myFunction' function, log the value of 'globalVariable' to the console.

// 9. Explain the output of each console.log statement.

// 10. Bonus: Modify the code to explore block scope using 'let' and 'const' variables.

// Solution:
// 1. let globalVariable = 10;

// 2. function myFunction() {
//      let localVariable = 5;
//      let globalVariable = 20;

//      console.log(localVariable); // Output: 5
//      console.log(globalVariable); // Output: 20
//    }

// 3. myFunction();

// 4. console.log(localVariable); // Output: ReferenceError: localVariable is not defined
// 5. console.log(globalVariable); // Output: 10

// 9. Output Explanation:
// - Inside the 'myFunction' function, the value of 'localVariable' is 5 and the value of 'globalVariable' is 20.
// - Outside the 'myFunction' function, the value of 'globalVariable' is still 10, as it refers to the global variable defined outside the function.
// - The 'localVariable' is not accessible outside the 'myFunction' function, hence the ReferenceError.

// 10. Bonus:
// - Use 'let' or 'const' instead of 'var' to declare variables with block scope.
// - Modify the code accordingly to explore block scope.