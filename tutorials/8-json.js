/*
Topic: JSON

1. JSON stands for JavaScript Object Notation.
2. JSON is a lightweight format for storing and transporting data.
3. JSON is a text written with JavaScript object notation.
4. JSON is a format for storing and transporting data.
5. JSON is a language-independent data format.
6. JSON is easy to read and write.
7. JSON is easy to learn.
8. JSON is easy to parse.
9. JSON is a data interchange format.
10. JSON is a format for storing and exchanging data.
11. JSON is a format for storing and exchanging data between a browser and a server.

*/

// JSON Declaration
let json = '{}';
console.log(json); // Output: {}

// JSON Declaration with values
let json1 = '{"name": "John", "age": 30, "isMarried": true}';
console.log(json1); // Output: {"name": "John", "age": 30, "isMarried": true}

// JSON Declaration with different types of values
let json2 = '{"name": "John", "age": 30, "isMarried": true, "address": ["USA", "Canada"], "greet": "Hello"}';
console.log(json2); // Output: {"name": "John", "age": 30, "isMarried": true, "address": ["USA", "Canada"], "greet": "Hello"}

// Parse JSON
let obj5 = JSON.parse(json1);
console.log(obj5); // Output: {name: "John", age: 30, isMarried: true}

// Stringify JSON
let json3 = JSON.stringify(obj5);
console.log(json3); // Output: {"name":"John","age":30,"isMarried":true}