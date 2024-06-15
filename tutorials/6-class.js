/*
Topic: Classes

In JavaScript, classes are a way to create objects with a blueprint for their structure and behavior.
They are a fundamental part of object-oriented programming and provide a template for creating objects with similar properties and methods.

A class in JavaScript consists of the following components:

Class Keyword: The class keyword is used to declare a class in JavaScript.

Class Name: A class can have a name that is used to identify it. The name should follow the rules for naming variables in JavaScript.

Constructor Method: The constructor method is a special method that is called when a new instance of the class is created.
                    It is used to initialize the object's properties.

Methods: Methods are functions defined within a class that can be called on instances of the class.

Properties: Properties are variables defined within a class that hold data related to the class.

Here's an example of a simple class in JavaScript:
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

const john = new Person("John", 30);

console.log(john.greet()); // Output: Hello, my name is John and I am 30 years old.

/*
In this example, the Person class is defined with a constructor method that takes name and age as parameters.

The constructor method initializes the name and age properties of the class instance using the this keyword.

The greet method is defined within the class to return a greeting message with the person's name and age.

An instance of the Person class named john is created using the new keyword, and the greet method is called on the john object.
*/

/*
Classes can be composed of multiple methods and properties to define the behavior and structure of objects in your code.

You can also extend classes to create subclasses that inherit properties and methods from a parent class.

Classes are a powerful feature in JavaScript that allows you to create reusable and organized code for building complex applications.
*/

class Weapon {
    constructor(name, damage) {
        this.name = name;
        this.damage = damage;
    }

    attack() {
        return `Attacking with ${this.name}!`;
    }
}

const sword = new Weapon("Sword", 10);
console.log(sword.attack()); // Output: Attacking with Sword!

class MagicWeapon extends Weapon {
    constructor(name, damage, element) {
        super(name, damage);
        this.element = element;
    }

    // Overriding the attack method
    attack() {
        return `Casting ${this.element} spell with ${this.name}!`;
    }
}

class Player {
    constructor(weapon) {
        this.weapon = weapon;
    }
    attack() {
        return this.weapon.attack();
    }
}

class Mage extends Player {
    constructor(weapon) {
        super(weapon);
    }
}

const fireStaff = new MagicWeapon("Fire Staff", 15, "Fire");
const mage = new Mage(fireStaff);
console.log(mage.attack()); // Output: Casting Fire spell with Fire Staff!
