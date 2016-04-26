'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// let keyword
var name = 'John';
var profession = 'doctor';
/******************************************/

// const keyword
var profile = 'user';
/******************************************/

// default parameters on functions
function calculateSum() {
    var a = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
    var b = arguments.length <= 1 || arguments[1] === undefined ? 2 : arguments[1];
    var c = arguments.length <= 2 || arguments[2] === undefined ? 3 : arguments[2];

    console.log(a + b + c);
}

calculateSum();
/******************************************/

// spread operator
function calculateArea(a, b) {
    var area = a * b;
    console.log(area);
}

var sides = [2, 3];

calculateArea.apply(undefined, sides);
/******************************************/

// declare a class
/* All the methods inside the body of the class are added to the prototype property of the class */

var Pupil = function () {
    function Pupil(name, age) {
        _classCallCheck(this, Pupil);

        this.name = name;
        this.age = age;
    }

    _createClass(Pupil, [{
        key: 'printPupilProfile',
        value: function printPupilProfile() {
            console.log("The pupil's name is " + this.name + " and the age is " + this.age);
        }
    }]);

    return Pupil;
}();

var p = new Pupil("Michael", 12);
p.printPupilProfile();