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
