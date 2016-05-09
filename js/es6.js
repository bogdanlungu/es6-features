// let keyword
let name = 'John';
let profession = 'doctor';
/******************************************/


// const keyword
const profile = 'user';
/******************************************/


// default parameters on functions
function calculateSum(a = 1, b = 2, c = 3) {
    console.log(a + b + c);
}

calculateSum();
/******************************************/


// spread operator
function calculateArea(a, b) {
    let area = a * b;
    console.log(area);
}

let sides = [2, 3];

calculateArea(...sides);
/******************************************/


// declare a class
/* All the methods inside the body of the class are added to the prototype property of the class */
class Pupil {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printPupilProfile() {
        console.log("The pupil's name is " + this.name + " and the age is " + this.age);
    }
}

var p = new Pupil("Michael", 12);
p.printPupilProfile();

// binary notation for numbers
let oneNumber = 0b000010100;

// Math methods in es6
console.log(Math.cosh(90));
console.log(Math.cbrt(8));

// repeat count method
console.log("xyz".repeat(3));

// endsWith method
var str = "John Smith";
console.log(str.endsWith("Smith"));

// Arrays - array.from(iterableObject, mapFunction, this) method
let numbers = "678902311";
let theObject = {
    number: 1
};
let array = Array.from(numbers, function(val) {
    return parseInt(val) + this.number;
}, theObject);
console.log(array);

/* Classes and inheritance */
let X = function(name) {
    this.name = name;
}

X.prototype.sayName = function() {
    console.log("My name is " + this.name);
}

class Y extends X {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    sayAge() {
        console.log("And my age is " + this.age);
    }
}

class Z extends Y {
    constructor(name, age, profession) {
        super(name, age);
        this.profession = profession;
    }

    showAllData() {
        super.sayName();
        super.sayAge();
        console.log("The profession is " + this.profession);
    }
}

//let aPerson = new Y("John Smith", 25);
//aPerson.sayName();
//aPerson.sayAge();

let anotherPerson = new Z("John Smith", 30, "doctor");
anotherPerson.showAllData();
