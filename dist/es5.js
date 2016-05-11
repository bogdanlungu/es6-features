(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import modules


var _lib = require('../js/lib');

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

// output from the imported module
console.log(_lib.queen);
console.log((0, _lib.calculateSquare)(4));
console.log((0, _lib.calculateCubic)(4));

},{"../js/lib":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateSquare = calculateSquare;
exports.calculateCubic = calculateCubic;
// export variable
var queen = exports.queen = "Elsabeth";

// export functions
function calculateSquare(n) {
  return n * n;
}

function calculateCubic(n) {
  return n * n * n;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcZXM2LmpzIiwianNcXGxpYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7Ozs7Ozs7O0FBT0EsSUFBSSxPQUFPLE1BQVg7QUFDQSxJQUFJLGFBQWEsUUFBakI7Ozs7QUFLQSxJQUFNLFVBQVUsTUFBaEI7Ozs7QUFLQSxTQUFTLFlBQVQsR0FBMkM7QUFBQSxRQUFyQixDQUFxQix5REFBakIsQ0FBaUI7QUFBQSxRQUFkLENBQWMseURBQVYsQ0FBVTtBQUFBLFFBQVAsQ0FBTyx5REFBSCxDQUFHOztBQUN2QyxZQUFRLEdBQVIsQ0FBWSxJQUFJLENBQUosR0FBUSxDQUFwQjtBQUNIOztBQUVEOzs7O0FBS0EsU0FBUyxhQUFULENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCO0FBQ3pCLFFBQUksT0FBTyxJQUFJLENBQWY7QUFDQSxZQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0g7O0FBRUQsSUFBSSxRQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWjs7QUFFQSwrQkFBaUIsS0FBakI7Ozs7OztJQU1NLEs7QUFDRixtQkFBWSxJQUFaLEVBQWtCLEdBQWxCLEVBQXVCO0FBQUE7O0FBQ25CLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0g7Ozs7NENBRW1CO0FBQ2hCLG9CQUFRLEdBQVIsQ0FBWSx5QkFBeUIsS0FBSyxJQUE5QixHQUFxQyxrQkFBckMsR0FBMEQsS0FBSyxHQUEzRTtBQUNIOzs7Ozs7QUFHTCxJQUFJLElBQUksSUFBSSxLQUFKLENBQVUsU0FBVixFQUFxQixFQUFyQixDQUFSO0FBQ0EsRUFBRSxpQkFBRjs7O0FBR0EsSUFBSSxZQUFZLEVBQWhCOzs7QUFHQSxRQUFRLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQVo7QUFDQSxRQUFRLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVo7OztBQUdBLFFBQVEsR0FBUixDQUFZLE1BQU0sTUFBTixDQUFhLENBQWIsQ0FBWjs7O0FBR0EsSUFBSSxNQUFNLFlBQVY7QUFDQSxRQUFRLEdBQVIsQ0FBWSxJQUFJLFFBQUosQ0FBYSxPQUFiLENBQVo7OztBQUdBLElBQUksVUFBVSxXQUFkO0FBQ0EsSUFBSSxZQUFZO0FBQ1osWUFBUTtBQURJLENBQWhCO0FBR0EsSUFBSSxRQUFRLE1BQU0sSUFBTixDQUFXLE9BQVgsRUFBb0IsVUFBUyxHQUFULEVBQWM7QUFDMUMsV0FBTyxTQUFTLEdBQVQsSUFBZ0IsS0FBSyxNQUE1QjtBQUNILENBRlcsRUFFVCxTQUZTLENBQVo7QUFHQSxRQUFRLEdBQVIsQ0FBWSxLQUFaOzs7QUFHQSxJQUFJLElBQUksU0FBSixDQUFJLENBQVMsSUFBVCxFQUFlO0FBQ25CLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDSCxDQUZEOztBQUlBLEVBQUUsU0FBRixDQUFZLE9BQVosR0FBc0IsWUFBVztBQUM3QixZQUFRLEdBQVIsQ0FBWSxnQkFBZ0IsS0FBSyxJQUFqQztBQUNILENBRkQ7O0lBSU0sQzs7O0FBQ0YsZUFBWSxJQUFaLEVBQWtCLEdBQWxCLEVBQXVCO0FBQUE7O0FBQUEseUZBQ2IsSUFEYTs7QUFFbkIsY0FBSyxHQUFMLEdBQVcsR0FBWDtBQUZtQjtBQUd0Qjs7OztpQ0FFUTtBQUNMLG9CQUFRLEdBQVIsQ0FBWSxtQkFBbUIsS0FBSyxHQUFwQztBQUNIOzs7O0VBUlcsQzs7SUFXVixDOzs7QUFDRixlQUFZLElBQVosRUFBa0IsR0FBbEIsRUFBdUIsVUFBdkIsRUFBbUM7QUFBQTs7QUFBQSwwRkFDekIsSUFEeUIsRUFDbkIsR0FEbUI7O0FBRS9CLGVBQUssVUFBTCxHQUFrQixVQUFsQjtBQUYrQjtBQUdsQzs7OztzQ0FFYTtBQUNWO0FBQ0E7QUFDQSxvQkFBUSxHQUFSLENBQVksdUJBQXVCLEtBQUssVUFBeEM7QUFDSDs7OztFQVZXLEM7Ozs7OztBQWlCaEIsSUFBSSxnQkFBZ0IsSUFBSSxDQUFKLENBQU0sWUFBTixFQUFvQixFQUFwQixFQUF3QixRQUF4QixDQUFwQjtBQUNBLGNBQWMsV0FBZDs7O0FBR0EsUUFBUSxHQUFSO0FBQ0EsUUFBUSxHQUFSLENBQVksMEJBQWdCLENBQWhCLENBQVo7QUFDQSxRQUFRLEdBQVIsQ0FBWSx5QkFBZSxDQUFmLENBQVo7Ozs7Ozs7O1FDdEhnQixlLEdBQUEsZTtRQUlBLGMsR0FBQSxjOztBQVBULElBQU0sd0JBQVEsVUFBZDs7O0FBR0EsU0FBUyxlQUFULENBQXlCLENBQXpCLEVBQTJCO0FBQ2hDLFNBQU8sSUFBSSxDQUFYO0FBQ0Q7O0FBRU0sU0FBUyxjQUFULENBQXdCLENBQXhCLEVBQTBCO0FBQy9CLFNBQU8sSUFBSSxDQUFKLEdBQVEsQ0FBZjtBQUNEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIEltcG9ydCBtb2R1bGVzXG5pbXBvcnQge1xuICAgIHF1ZWVuLFxuICAgIGNhbGN1bGF0ZVNxdWFyZSxcbiAgICBjYWxjdWxhdGVDdWJpY1xufSBmcm9tICcuLi9qcy9saWInO1xuXG4vLyBsZXQga2V5d29yZFxubGV0IG5hbWUgPSAnSm9obic7XG5sZXQgcHJvZmVzc2lvbiA9ICdkb2N0b3InO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4vLyBjb25zdCBrZXl3b3JkXG5jb25zdCBwcm9maWxlID0gJ3VzZXInO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4vLyBkZWZhdWx0IHBhcmFtZXRlcnMgb24gZnVuY3Rpb25zXG5mdW5jdGlvbiBjYWxjdWxhdGVTdW0oYSA9IDEsIGIgPSAyLCBjID0gMykge1xuICAgIGNvbnNvbGUubG9nKGEgKyBiICsgYyk7XG59XG5cbmNhbGN1bGF0ZVN1bSgpO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4vLyBzcHJlYWQgb3BlcmF0b3JcbmZ1bmN0aW9uIGNhbGN1bGF0ZUFyZWEoYSwgYikge1xuICAgIGxldCBhcmVhID0gYSAqIGI7XG4gICAgY29uc29sZS5sb2coYXJlYSk7XG59XG5cbmxldCBzaWRlcyA9IFsyLCAzXTtcblxuY2FsY3VsYXRlQXJlYSguLi5zaWRlcyk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbi8vIGRlY2xhcmUgYSBjbGFzc1xuLyogQWxsIHRoZSBtZXRob2RzIGluc2lkZSB0aGUgYm9keSBvZiB0aGUgY2xhc3MgYXJlIGFkZGVkIHRvIHRoZSBwcm90b3R5cGUgcHJvcGVydHkgb2YgdGhlIGNsYXNzICovXG5jbGFzcyBQdXBpbCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgYWdlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWdlID0gYWdlO1xuICAgIH1cblxuICAgIHByaW50UHVwaWxQcm9maWxlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlRoZSBwdXBpbCdzIG5hbWUgaXMgXCIgKyB0aGlzLm5hbWUgKyBcIiBhbmQgdGhlIGFnZSBpcyBcIiArIHRoaXMuYWdlKTtcbiAgICB9XG59XG5cbnZhciBwID0gbmV3IFB1cGlsKFwiTWljaGFlbFwiLCAxMik7XG5wLnByaW50UHVwaWxQcm9maWxlKCk7XG5cbi8vIGJpbmFyeSBub3RhdGlvbiBmb3IgbnVtYmVyc1xubGV0IG9uZU51bWJlciA9IDBiMDAwMDEwMTAwO1xuXG4vLyBNYXRoIG1ldGhvZHMgaW4gZXM2XG5jb25zb2xlLmxvZyhNYXRoLmNvc2goOTApKTtcbmNvbnNvbGUubG9nKE1hdGguY2JydCg4KSk7XG5cbi8vIHJlcGVhdCBjb3VudCBtZXRob2RcbmNvbnNvbGUubG9nKFwieHl6XCIucmVwZWF0KDMpKTtcblxuLy8gZW5kc1dpdGggbWV0aG9kXG52YXIgc3RyID0gXCJKb2huIFNtaXRoXCI7XG5jb25zb2xlLmxvZyhzdHIuZW5kc1dpdGgoXCJTbWl0aFwiKSk7XG5cbi8vIEFycmF5cyAtIGFycmF5LmZyb20oaXRlcmFibGVPYmplY3QsIG1hcEZ1bmN0aW9uLCB0aGlzKSBtZXRob2RcbmxldCBudW1iZXJzID0gXCI2Nzg5MDIzMTFcIjtcbmxldCB0aGVPYmplY3QgPSB7XG4gICAgbnVtYmVyOiAxXG59O1xubGV0IGFycmF5ID0gQXJyYXkuZnJvbShudW1iZXJzLCBmdW5jdGlvbih2YWwpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQodmFsKSArIHRoaXMubnVtYmVyO1xufSwgdGhlT2JqZWN0KTtcbmNvbnNvbGUubG9nKGFycmF5KTtcblxuLyogQ2xhc3NlcyBhbmQgaW5oZXJpdGFuY2UgKi9cbmxldCBYID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG59XG5cblgucHJvdG90eXBlLnNheU5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIk15IG5hbWUgaXMgXCIgKyB0aGlzLm5hbWUpO1xufVxuXG5jbGFzcyBZIGV4dGVuZHMgWCB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgYWdlKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICB9XG5cbiAgICBzYXlBZ2UoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQW5kIG15IGFnZSBpcyBcIiArIHRoaXMuYWdlKTtcbiAgICB9XG59XG5cbmNsYXNzIFogZXh0ZW5kcyBZIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBhZ2UsIHByb2Zlc3Npb24pIHtcbiAgICAgICAgc3VwZXIobmFtZSwgYWdlKTtcbiAgICAgICAgdGhpcy5wcm9mZXNzaW9uID0gcHJvZmVzc2lvbjtcbiAgICB9XG5cbiAgICBzaG93QWxsRGF0YSgpIHtcbiAgICAgICAgc3VwZXIuc2F5TmFtZSgpO1xuICAgICAgICBzdXBlci5zYXlBZ2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgcHJvZmVzc2lvbiBpcyBcIiArIHRoaXMucHJvZmVzc2lvbik7XG4gICAgfVxufVxuXG4vL2xldCBhUGVyc29uID0gbmV3IFkoXCJKb2huIFNtaXRoXCIsIDI1KTtcbi8vYVBlcnNvbi5zYXlOYW1lKCk7XG4vL2FQZXJzb24uc2F5QWdlKCk7XG5cbmxldCBhbm90aGVyUGVyc29uID0gbmV3IFooXCJKb2huIFNtaXRoXCIsIDMwLCBcImRvY3RvclwiKTtcbmFub3RoZXJQZXJzb24uc2hvd0FsbERhdGEoKTtcblxuLy8gb3V0cHV0IGZyb20gdGhlIGltcG9ydGVkIG1vZHVsZVxuY29uc29sZS5sb2cocXVlZW4pO1xuY29uc29sZS5sb2coY2FsY3VsYXRlU3F1YXJlKDQpKTtcbmNvbnNvbGUubG9nKGNhbGN1bGF0ZUN1YmljKDQpKTtcbiIsIi8vIGV4cG9ydCB2YXJpYWJsZVxyXG5leHBvcnQgY29uc3QgcXVlZW4gPSBcIkVsc2FiZXRoXCI7XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVTcXVhcmUobil7XHJcbiAgcmV0dXJuIG4gKiBuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQ3ViaWMobil7XHJcbiAgcmV0dXJuIG4gKiBuICogbjtcclxufVxyXG4iXX0=
