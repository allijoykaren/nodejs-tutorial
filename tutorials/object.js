/*
Topic: Object

1. Object is a collection of key-value pairs.
2. Object is a special type of array.
3. Object can store multiple values in a single variable.
4. Object can store different types of data.
5. Object can store same type of data.
6. Object can store arrays.
7. Object can store functions.
8. Object is a key-value pair.
9. Object is a mutable.
10. Object is a dynamic.
11. Object is a unordered collection.
12. Object is a iterable.

*/

// Object Declaration
let obj = {};
console.log(obj); // Output: {}

// Object Declaration with values
let obj1 = { name: 'John', age: 30, isMarried: true };
console.log(obj1); // Output: {name: "John", age: 30, isMarried: true}

// Object Declaration with different types of values
let obj2 = { name: 'John', age: 30, isMarried: true, address: ['USA', 'Canada'], greet: function () { return 'Hello'; } };
console.log(obj2); // Output: {name: "John", age: 30, isMarried: true, address: Array(2), greet: ƒ}

// Get the value of a key from an object
console.log(obj1['name']); // Output: John

// Get the value of a key from an object
console.log(obj1.name); // Output: John

// Add a new key-value pair to an object
obj1.city = 'New York';

// Add a new key-value pair to an object
obj1['country'] = 'USA';

console.log(obj1); // Output: {name: "John", age: 30, isMarried: true, city: "New York", country: "USA"}

// Remove a key-value pair from an object
delete obj1.isMarried;
console.log(obj1); // Output: {name: "John", age: 30, city: "New York", country: "USA"}

// Object.keys()
console.log(Object.keys(obj1)); // Output: ["name", "age", "city", "country"]

// Object.values()
console.log(Object.values(obj1)); // Output: ["John", 30, "New York", "USA"]

// Object.entries()
console.log(Object.entries(obj1)); // Output: [["name", "John"], ["age", 30], ["city", "New York"], ["country", "USA"]]

// Object.assign()
let obj3 = { name: 'John', age: 30 };
let obj4 = { city: 'New York', country: 'USA' };
let obj5 = Object.assign(obj3, obj4);
console.log(obj5); // Output: {name: "John", age: 30, city: "New York", country: "USA"}

// Object.freeze()
Object.freeze(obj5);
obj5.city = 'California';
console.log(obj5); // Output: {name: "John", age: 30, city: "New York", country: "USA"}

// Object.seal()
Object.seal(obj5);
obj5.city = 'California';
console.log(obj5); // Output: {name: "John", age: 30, city: "New York", country: "USA"}

// Object.isFrozen()
console.log(Object.isFrozen(obj5)); // Output: true

// Object.isSealed()
console.log(Object.isSealed(obj5)); // Output: true

// Object.isExtensible()
console.log(Object.isExtensible(obj5)); // Output: false

/*
In JavaScript, Object.freeze() and Object.seal() are methods used to restrict modifications to objects.

Object.freeze() makes an object immutable, meaning that you cannot add new properties, delete existing properties, 
or change the values of existing properties. The method returns the object in a frozen state. In the provided code, 
after obj5 is frozen, attempting to change obj5.city to 'California' has no effect because the object is frozen.

Object.seal() prevents new properties from being added to an object and marks all existing properties as non-configurable. 
However, unlike Object.freeze(), values of existing properties can still be changed as long as they are writable. 

The method returns the object in a sealed state. In the provided code, obj5 is first frozen and then attempted to be sealed, 
which is redundant because a frozen object is already sealed. However, if an object is only sealed (not frozen), 
you could still change the values of the sealed properties.

The code also demonstrates checking if an object is frozen or sealed using Object.isFrozen() and Object.isSealed(), 
respectively, and whether it is extensible using Object.isExtensible(). An object is extensible if new properties can be added to it. A frozen or sealed object is not extensible.
*/

// Object.is()
let obj6 = { name: 'John', age: 30 };
let obj7 = { name: 'John', age: 30 };
console.log(Object.is(obj6, obj7)); // Output: false

// Object.is()
let obj8 = { name: 'John', age: 30 };
let obj9 = obj8;
console.log(Object.is(obj8, obj9)); // Output: true