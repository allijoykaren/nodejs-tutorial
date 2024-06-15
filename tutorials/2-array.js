/*
Topic: Array

1. Array is a collection of elements.
2. Array is a special type of object.
3. Array can store multiple values in a single variable.
4. Array can store different types of data.
5. Array can store same type of data.
6. Array can store objects.
7. Array can store functions.
8. Array can store other arrays.
9. Array is a zero based index.
10. Array is a mutable.
11. Array is a dynamic.
12. Array is a ordered collection.
13. Array is a iterable.
14. Array is a object.

*/

// Array Declaration
let arr = [];
console.log(arr); // Output: []

// Array Declaration with values
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1); // Output: [1, 2, 3, 4, 5]

// Array Declaration with different types of values
let arr2 = [1, 'Hello', true, { name: 'John' }, function () { return 'Hello'; }];
console.log(arr2); // Output: [1, "Hello", true, {…}, ƒ]

// Get the first element of an array
console.log(arr1[0]); // Output: 1

// Get the last element of an array
console.log(arr1[arr1.length - 1]); // Output: 5

// Remove the first element of an array
arr1.shift();
console.log(arr1); // Output: [2, 3, 4, 5]

// Remove the last element of an array
arr1.pop();
console.log(arr1); // Output: [2, 3, 4]

// Add elements to the beginning of an array
arr1.unshift(1);
console.log(arr1); // Output: [1, 2, 3, 4]

// Add elements to the end of an array
arr1.push(5);
console.log(arr1); // Output: [1, 2, 3, 4, 5]

// Remove 2 elements that after the position 1 from an array
arr1.splice(1, 2);
console.log(arr1); // Output: [1, 4, 5]

// Add 2 elements that after the position 1 from an array
// (method) Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)
arr1.splice(1, 0, 2, 3);
console.log(arr1); // Output: [1, 2, 3, 4, 5]

// Concatenate two arrays
let arr3 = arr1.concat([6, 7]);
console.log(arr3); // Output: [1, 2, 3, 4, 5, 6, 7]

// Get the index of an element in an array
console.log(arr3.indexOf(3)); // Output: 2

// Check if an element exists in an array
console.log(arr3.includes(3)); // Output: true

// Reverse an array
console.log(arr3.reverse()); // Output: [7, 6, 5, 4, 3, 2, 1]

// Sort an array
console.log(arr3.sort()); // Output: [1, 2, 3, 4, 5, 6, 7]

// Iterate over an array using for loop
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}

// Iterate over an array using forEach method
arr3.forEach((element) => {
    console.log(element);
});

// Iterate over an array using map method
let arr4 = arr3.map((element) => {
    return element * 2;
});

/*
    What are the difference between forEach and map methods?
    The forEach method is used to iterate over an array and perform an operation on each element.
    The map method is used to iterate over an array and return a new array with the results of applying a function to each element.
*/