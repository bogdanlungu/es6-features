'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

// binary notation for numbers
var oneNumber = 20;

// Math methods in es6
console.log(Math.cosh(90));
console.log(Math.cbrt(8));

// repeat count method
console.log("xyz".repeat(3));

// endsWith method
var str = "John Smith";
console.log(str.endsWith("Smith"));

// Arrays - array.from(iterableObject, mapFunction, this) method
var numbers = "678902311";
var theObject = {
    number: 1
};
var array = Array.from(numbers, function (val) {
    return parseInt(val) + this.number;
}, theObject);
console.log(array);

/* Classes and inheritance */
var X = function X(name) {
    this.name = name;
};

X.prototype.sayName = function () {
    console.log("My name is " + this.name);
};

var Y = function (_X) {
    _inherits(Y, _X);

    function Y(name, age) {
        _classCallCheck(this, Y);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Y).call(this, name));

        _this.age = age;
        return _this;
    }

    _createClass(Y, [{
        key: 'sayAge',
        value: function sayAge() {
            console.log("And my age is " + this.age);
        }
    }]);

    return Y;
}(X);

var Z = function (_Y) {
    _inherits(Z, _Y);

    function Z(name, age, profession) {
        _classCallCheck(this, Z);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Z).call(this, name, age));

        _this2.profession = profession;
        return _this2;
    }

    _createClass(Z, [{
        key: 'showAllData',
        value: function showAllData() {
            _get(Object.getPrototypeOf(Z.prototype), 'sayName', this).call(this);
            _get(Object.getPrototypeOf(Z.prototype), 'sayAge', this).call(this);
            console.log("The profession is " + this.profession);
        }
    }]);

    return Z;
}(Y);

//let aPerson = new Y("John Smith", 25);
//aPerson.sayName();
//aPerson.sayAge();

var anotherPerson = new Z("John Smith", 30, "doctor");
anotherPerson.showAllData();