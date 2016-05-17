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

// Generators
/*
function* generatorFunc()
{
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let generator = generatorFunc();

console.log(generator.next().value);
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcZXM2LmpzIiwianNcXGxpYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7Ozs7Ozs7O0FBT0EsSUFBSSxPQUFPLE1BQVg7QUFDQSxJQUFJLGFBQWEsUUFBakI7Ozs7QUFLQSxJQUFNLFVBQVUsTUFBaEI7Ozs7QUFLQSxTQUFTLFlBQVQsR0FBMkM7QUFBQSxRQUFyQixDQUFxQix5REFBakIsQ0FBaUI7QUFBQSxRQUFkLENBQWMseURBQVYsQ0FBVTtBQUFBLFFBQVAsQ0FBTyx5REFBSCxDQUFHOztBQUN2QyxZQUFRLEdBQVIsQ0FBWSxJQUFJLENBQUosR0FBUSxDQUFwQjtBQUNIOztBQUVEOzs7O0FBS0EsU0FBUyxhQUFULENBQXVCLENBQXZCLEVBQTBCLENBQTFCLEVBQTZCO0FBQ3pCLFFBQUksT0FBTyxJQUFJLENBQWY7QUFDQSxZQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0g7O0FBRUQsSUFBSSxRQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBWjs7QUFFQSwrQkFBaUIsS0FBakI7Ozs7OztJQU1NLEs7QUFDRixtQkFBWSxJQUFaLEVBQWtCLEdBQWxCLEVBQXVCO0FBQUE7O0FBQ25CLGFBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxhQUFLLEdBQUwsR0FBVyxHQUFYO0FBQ0g7Ozs7NENBRW1CO0FBQ2hCLG9CQUFRLEdBQVIsQ0FBWSx5QkFBeUIsS0FBSyxJQUE5QixHQUFxQyxrQkFBckMsR0FBMEQsS0FBSyxHQUEzRTtBQUNIOzs7Ozs7QUFHTCxJQUFJLElBQUksSUFBSSxLQUFKLENBQVUsU0FBVixFQUFxQixFQUFyQixDQUFSO0FBQ0EsRUFBRSxpQkFBRjs7O0FBR0EsSUFBSSxZQUFZLEVBQWhCOzs7QUFHQSxRQUFRLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBVSxFQUFWLENBQVo7QUFDQSxRQUFRLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBVSxDQUFWLENBQVo7OztBQUdBLFFBQVEsR0FBUixDQUFZLE1BQU0sTUFBTixDQUFhLENBQWIsQ0FBWjs7O0FBR0EsSUFBSSxNQUFNLFlBQVY7QUFDQSxRQUFRLEdBQVIsQ0FBWSxJQUFJLFFBQUosQ0FBYSxPQUFiLENBQVo7OztBQUdBLElBQUksVUFBVSxXQUFkO0FBQ0EsSUFBSSxZQUFZO0FBQ1osWUFBUTtBQURJLENBQWhCO0FBR0EsSUFBSSxRQUFRLE1BQU0sSUFBTixDQUFXLE9BQVgsRUFBb0IsVUFBUyxHQUFULEVBQWM7QUFDMUMsV0FBTyxTQUFTLEdBQVQsSUFBZ0IsS0FBSyxNQUE1QjtBQUNILENBRlcsRUFFVCxTQUZTLENBQVo7QUFHQSxRQUFRLEdBQVIsQ0FBWSxLQUFaOzs7QUFHQSxJQUFJLElBQUksU0FBSixDQUFJLENBQVMsSUFBVCxFQUFlO0FBQ25CLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDSCxDQUZEOztBQUlBLEVBQUUsU0FBRixDQUFZLE9BQVosR0FBc0IsWUFBVztBQUM3QixZQUFRLEdBQVIsQ0FBWSxnQkFBZ0IsS0FBSyxJQUFqQztBQUNILENBRkQ7O0lBSU0sQzs7O0FBQ0YsZUFBWSxJQUFaLEVBQWtCLEdBQWxCLEVBQXVCO0FBQUE7O0FBQUEseUZBQ2IsSUFEYTs7QUFFbkIsY0FBSyxHQUFMLEdBQVcsR0FBWDtBQUZtQjtBQUd0Qjs7OztpQ0FFUTtBQUNMLG9CQUFRLEdBQVIsQ0FBWSxtQkFBbUIsS0FBSyxHQUFwQztBQUNIOzs7O0VBUlcsQzs7SUFXVixDOzs7QUFDRixlQUFZLElBQVosRUFBa0IsR0FBbEIsRUFBdUIsVUFBdkIsRUFBbUM7QUFBQTs7QUFBQSwwRkFDekIsSUFEeUIsRUFDbkIsR0FEbUI7O0FBRS9CLGVBQUssVUFBTCxHQUFrQixVQUFsQjtBQUYrQjtBQUdsQzs7OztzQ0FFYTtBQUNWO0FBQ0E7QUFDQSxvQkFBUSxHQUFSLENBQVksdUJBQXVCLEtBQUssVUFBeEM7QUFDSDs7OztFQVZXLEM7Ozs7OztBQWlCaEIsSUFBSSxnQkFBZ0IsSUFBSSxDQUFKLENBQU0sWUFBTixFQUFvQixFQUFwQixFQUF3QixRQUF4QixDQUFwQjtBQUNBLGNBQWMsV0FBZDs7O0FBR0EsUUFBUSxHQUFSO0FBQ0EsUUFBUSxHQUFSLENBQVksMEJBQWdCLENBQWhCLENBQVo7QUFDQSxRQUFRLEdBQVIsQ0FBWSx5QkFBZSxDQUFmLENBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQ3RIZ0IsZSxHQUFBLGU7UUFJQSxjLEdBQUEsYzs7QUFQVCxJQUFNLHdCQUFRLFVBQWQ7OztBQUdBLFNBQVMsZUFBVCxDQUF5QixDQUF6QixFQUEyQjtBQUNoQyxTQUFPLElBQUksQ0FBWDtBQUNEOztBQUVNLFNBQVMsY0FBVCxDQUF3QixDQUF4QixFQUEwQjtBQUMvQixTQUFPLElBQUksQ0FBSixHQUFRLENBQWY7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBJbXBvcnQgbW9kdWxlc1xuaW1wb3J0IHtcbiAgICBxdWVlbixcbiAgICBjYWxjdWxhdGVTcXVhcmUsXG4gICAgY2FsY3VsYXRlQ3ViaWNcbn0gZnJvbSAnLi4vanMvbGliJztcblxuLy8gbGV0IGtleXdvcmRcbmxldCBuYW1lID0gJ0pvaG4nO1xubGV0IHByb2Zlc3Npb24gPSAnZG9jdG9yJztcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLy8gY29uc3Qga2V5d29yZFxuY29uc3QgcHJvZmlsZSA9ICd1c2VyJztcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLy8gZGVmYXVsdCBwYXJhbWV0ZXJzIG9uIGZ1bmN0aW9uc1xuZnVuY3Rpb24gY2FsY3VsYXRlU3VtKGEgPSAxLCBiID0gMiwgYyA9IDMpIHtcbiAgICBjb25zb2xlLmxvZyhhICsgYiArIGMpO1xufVxuXG5jYWxjdWxhdGVTdW0oKTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLy8gc3ByZWFkIG9wZXJhdG9yXG5mdW5jdGlvbiBjYWxjdWxhdGVBcmVhKGEsIGIpIHtcbiAgICBsZXQgYXJlYSA9IGEgKiBiO1xuICAgIGNvbnNvbGUubG9nKGFyZWEpO1xufVxuXG5sZXQgc2lkZXMgPSBbMiwgM107XG5cbmNhbGN1bGF0ZUFyZWEoLi4uc2lkZXMpO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4vLyBkZWNsYXJlIGEgY2xhc3Ncbi8qIEFsbCB0aGUgbWV0aG9kcyBpbnNpZGUgdGhlIGJvZHkgb2YgdGhlIGNsYXNzIGFyZSBhZGRlZCB0byB0aGUgcHJvdG90eXBlIHByb3BlcnR5IG9mIHRoZSBjbGFzcyAqL1xuY2xhc3MgUHVwaWwge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICB9XG5cbiAgICBwcmludFB1cGlsUHJvZmlsZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgcHVwaWwncyBuYW1lIGlzIFwiICsgdGhpcy5uYW1lICsgXCIgYW5kIHRoZSBhZ2UgaXMgXCIgKyB0aGlzLmFnZSk7XG4gICAgfVxufVxuXG52YXIgcCA9IG5ldyBQdXBpbChcIk1pY2hhZWxcIiwgMTIpO1xucC5wcmludFB1cGlsUHJvZmlsZSgpO1xuXG4vLyBiaW5hcnkgbm90YXRpb24gZm9yIG51bWJlcnNcbmxldCBvbmVOdW1iZXIgPSAwYjAwMDAxMDEwMDtcblxuLy8gTWF0aCBtZXRob2RzIGluIGVzNlxuY29uc29sZS5sb2coTWF0aC5jb3NoKDkwKSk7XG5jb25zb2xlLmxvZyhNYXRoLmNicnQoOCkpO1xuXG4vLyByZXBlYXQgY291bnQgbWV0aG9kXG5jb25zb2xlLmxvZyhcInh5elwiLnJlcGVhdCgzKSk7XG5cbi8vIGVuZHNXaXRoIG1ldGhvZFxudmFyIHN0ciA9IFwiSm9obiBTbWl0aFwiO1xuY29uc29sZS5sb2coc3RyLmVuZHNXaXRoKFwiU21pdGhcIikpO1xuXG4vLyBBcnJheXMgLSBhcnJheS5mcm9tKGl0ZXJhYmxlT2JqZWN0LCBtYXBGdW5jdGlvbiwgdGhpcykgbWV0aG9kXG5sZXQgbnVtYmVycyA9IFwiNjc4OTAyMzExXCI7XG5sZXQgdGhlT2JqZWN0ID0ge1xuICAgIG51bWJlcjogMVxufTtcbmxldCBhcnJheSA9IEFycmF5LmZyb20obnVtYmVycywgZnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCkgKyB0aGlzLm51bWJlcjtcbn0sIHRoZU9iamVjdCk7XG5jb25zb2xlLmxvZyhhcnJheSk7XG5cbi8qIENsYXNzZXMgYW5kIGluaGVyaXRhbmNlICovXG5sZXQgWCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xufVxuXG5YLnByb3RvdHlwZS5zYXlOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJNeSBuYW1lIGlzIFwiICsgdGhpcy5uYW1lKTtcbn1cblxuY2xhc3MgWSBleHRlbmRzIFgge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgfVxuXG4gICAgc2F5QWdlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFuZCBteSBhZ2UgaXMgXCIgKyB0aGlzLmFnZSk7XG4gICAgfVxufVxuXG5jbGFzcyBaIGV4dGVuZHMgWSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgYWdlLCBwcm9mZXNzaW9uKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGFnZSk7XG4gICAgICAgIHRoaXMucHJvZmVzc2lvbiA9IHByb2Zlc3Npb247XG4gICAgfVxuXG4gICAgc2hvd0FsbERhdGEoKSB7XG4gICAgICAgIHN1cGVyLnNheU5hbWUoKTtcbiAgICAgICAgc3VwZXIuc2F5QWdlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHByb2Zlc3Npb24gaXMgXCIgKyB0aGlzLnByb2Zlc3Npb24pO1xuICAgIH1cbn1cblxuLy9sZXQgYVBlcnNvbiA9IG5ldyBZKFwiSm9obiBTbWl0aFwiLCAyNSk7XG4vL2FQZXJzb24uc2F5TmFtZSgpO1xuLy9hUGVyc29uLnNheUFnZSgpO1xuXG5sZXQgYW5vdGhlclBlcnNvbiA9IG5ldyBaKFwiSm9obiBTbWl0aFwiLCAzMCwgXCJkb2N0b3JcIik7XG5hbm90aGVyUGVyc29uLnNob3dBbGxEYXRhKCk7XG5cbi8vIG91dHB1dCBmcm9tIHRoZSBpbXBvcnRlZCBtb2R1bGVcbmNvbnNvbGUubG9nKHF1ZWVuKTtcbmNvbnNvbGUubG9nKGNhbGN1bGF0ZVNxdWFyZSg0KSk7XG5jb25zb2xlLmxvZyhjYWxjdWxhdGVDdWJpYyg0KSk7XG5cbi8vIEdlbmVyYXRvcnNcbi8qXG5mdW5jdGlvbiogZ2VuZXJhdG9yRnVuYygpXG57XG4gIHlpZWxkIDE7XG4gIHlpZWxkIDI7XG4gIHlpZWxkIDM7XG4gIHlpZWxkIDQ7XG4gIHlpZWxkIDU7XG59XG5cbmxldCBnZW5lcmF0b3IgPSBnZW5lcmF0b3JGdW5jKCk7XG5cbmNvbnNvbGUubG9nKGdlbmVyYXRvci5uZXh0KCkudmFsdWUpO1xuKi9cbiIsIi8vIGV4cG9ydCB2YXJpYWJsZVxyXG5leHBvcnQgY29uc3QgcXVlZW4gPSBcIkVsc2FiZXRoXCI7XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb25zXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVTcXVhcmUobil7XHJcbiAgcmV0dXJuIG4gKiBuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlQ3ViaWMobil7XHJcbiAgcmV0dXJuIG4gKiBuICogbjtcclxufVxyXG4iXX0=
