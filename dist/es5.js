(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import modules


var _lib = require('../js/lib');

var _marked = [generatorFunc].map(regeneratorRuntime.mark);

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
function generatorFunc() {
    return regeneratorRuntime.wrap(function generatorFunc$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 1;

                case 2:
                    _context.next = 4;
                    return 2;

                case 4:
                    _context.next = 6;
                    return 3;

                case 6:
                    _context.next = 8;
                    return 4;

                case 8:
                    _context.next = 10;
                    return 5;

                case 10:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var generator = generatorFunc();

console.log(generator.next().value);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcZXM2LmpzIiwianNcXGxpYi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUNDQTs7ZUE0SFUsYTs7Ozs7Ozs7O0FBckhWLElBQUksT0FBTyxNQUFYO0FBQ0EsSUFBSSxhQUFhLFFBQWpCOzs7O0FBS0EsSUFBTSxVQUFVLE1BQWhCOzs7O0FBS0EsU0FBUyxZQUFULEdBQTJDO0FBQUEsUUFBckIsQ0FBcUIseURBQWpCLENBQWlCO0FBQUEsUUFBZCxDQUFjLHlEQUFWLENBQVU7QUFBQSxRQUFQLENBQU8seURBQUgsQ0FBRzs7QUFDdkMsWUFBUSxHQUFSLENBQVksSUFBSSxDQUFKLEdBQVEsQ0FBcEI7QUFDSDs7QUFFRDs7OztBQUtBLFNBQVMsYUFBVCxDQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QjtBQUN6QixRQUFJLE9BQU8sSUFBSSxDQUFmO0FBQ0EsWUFBUSxHQUFSLENBQVksSUFBWjtBQUNIOztBQUVELElBQUksUUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVo7O0FBRUEsK0JBQWlCLEtBQWpCOzs7Ozs7SUFNTSxLO0FBQ0YsbUJBQVksSUFBWixFQUFrQixHQUFsQixFQUF1QjtBQUFBOztBQUNuQixhQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0EsYUFBSyxHQUFMLEdBQVcsR0FBWDtBQUNIOzs7OzRDQUVtQjtBQUNoQixvQkFBUSxHQUFSLENBQVkseUJBQXlCLEtBQUssSUFBOUIsR0FBcUMsa0JBQXJDLEdBQTBELEtBQUssR0FBM0U7QUFDSDs7Ozs7O0FBR0wsSUFBSSxJQUFJLElBQUksS0FBSixDQUFVLFNBQVYsRUFBcUIsRUFBckIsQ0FBUjtBQUNBLEVBQUUsaUJBQUY7OztBQUdBLElBQUksWUFBWSxFQUFoQjs7O0FBR0EsUUFBUSxHQUFSLENBQVksS0FBSyxJQUFMLENBQVUsRUFBVixDQUFaO0FBQ0EsUUFBUSxHQUFSLENBQVksS0FBSyxJQUFMLENBQVUsQ0FBVixDQUFaOzs7QUFHQSxRQUFRLEdBQVIsQ0FBWSxNQUFNLE1BQU4sQ0FBYSxDQUFiLENBQVo7OztBQUdBLElBQUksTUFBTSxZQUFWO0FBQ0EsUUFBUSxHQUFSLENBQVksSUFBSSxRQUFKLENBQWEsT0FBYixDQUFaOzs7QUFHQSxJQUFJLFVBQVUsV0FBZDtBQUNBLElBQUksWUFBWTtBQUNaLFlBQVE7QUFESSxDQUFoQjtBQUdBLElBQUksUUFBUSxNQUFNLElBQU4sQ0FBVyxPQUFYLEVBQW9CLFVBQVMsR0FBVCxFQUFjO0FBQzFDLFdBQU8sU0FBUyxHQUFULElBQWdCLEtBQUssTUFBNUI7QUFDSCxDQUZXLEVBRVQsU0FGUyxDQUFaO0FBR0EsUUFBUSxHQUFSLENBQVksS0FBWjs7O0FBR0EsSUFBSSxJQUFJLFNBQUosQ0FBSSxDQUFTLElBQVQsRUFBZTtBQUNuQixTQUFLLElBQUwsR0FBWSxJQUFaO0FBQ0gsQ0FGRDs7QUFJQSxFQUFFLFNBQUYsQ0FBWSxPQUFaLEdBQXNCLFlBQVc7QUFDN0IsWUFBUSxHQUFSLENBQVksZ0JBQWdCLEtBQUssSUFBakM7QUFDSCxDQUZEOztJQUlNLEM7OztBQUNGLGVBQVksSUFBWixFQUFrQixHQUFsQixFQUF1QjtBQUFBOztBQUFBLHlGQUNiLElBRGE7O0FBRW5CLGNBQUssR0FBTCxHQUFXLEdBQVg7QUFGbUI7QUFHdEI7Ozs7aUNBRVE7QUFDTCxvQkFBUSxHQUFSLENBQVksbUJBQW1CLEtBQUssR0FBcEM7QUFDSDs7OztFQVJXLEM7O0lBV1YsQzs7O0FBQ0YsZUFBWSxJQUFaLEVBQWtCLEdBQWxCLEVBQXVCLFVBQXZCLEVBQW1DO0FBQUE7O0FBQUEsMEZBQ3pCLElBRHlCLEVBQ25CLEdBRG1COztBQUUvQixlQUFLLFVBQUwsR0FBa0IsVUFBbEI7QUFGK0I7QUFHbEM7Ozs7c0NBRWE7QUFDVjtBQUNBO0FBQ0Esb0JBQVEsR0FBUixDQUFZLHVCQUF1QixLQUFLLFVBQXhDO0FBQ0g7Ozs7RUFWVyxDOzs7Ozs7QUFpQmhCLElBQUksZ0JBQWdCLElBQUksQ0FBSixDQUFNLFlBQU4sRUFBb0IsRUFBcEIsRUFBd0IsUUFBeEIsQ0FBcEI7QUFDQSxjQUFjLFdBQWQ7OztBQUdBLFFBQVEsR0FBUjtBQUNBLFFBQVEsR0FBUixDQUFZLDBCQUFnQixDQUFoQixDQUFaO0FBQ0EsUUFBUSxHQUFSLENBQVkseUJBQWUsQ0FBZixDQUFaOzs7QUFHQSxTQUFVLGFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRVEsQ0FGUjs7QUFBQTtBQUFBO0FBQUEsMkJBR1EsQ0FIUjs7QUFBQTtBQUFBO0FBQUEsMkJBSVEsQ0FKUjs7QUFBQTtBQUFBO0FBQUEsMkJBS1EsQ0FMUjs7QUFBQTtBQUFBO0FBQUEsMkJBTVEsQ0FOUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFTQSxJQUFJLFlBQVksZUFBaEI7O0FBRUEsUUFBUSxHQUFSLENBQVksVUFBVSxJQUFWLEdBQWlCLEtBQTdCOzs7Ozs7OztRQ3BJZ0IsZSxHQUFBLGU7UUFJQSxjLEdBQUEsYzs7QUFQVCxJQUFNLHdCQUFRLFVBQWQ7OztBQUdBLFNBQVMsZUFBVCxDQUF5QixDQUF6QixFQUEyQjtBQUNoQyxTQUFPLElBQUksQ0FBWDtBQUNEOztBQUVNLFNBQVMsY0FBVCxDQUF3QixDQUF4QixFQUEwQjtBQUMvQixTQUFPLElBQUksQ0FBSixHQUFRLENBQWY7QUFDRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBJbXBvcnQgbW9kdWxlc1xuaW1wb3J0IHtcbiAgICBxdWVlbixcbiAgICBjYWxjdWxhdGVTcXVhcmUsXG4gICAgY2FsY3VsYXRlQ3ViaWNcbn0gZnJvbSAnLi4vanMvbGliJztcblxuLy8gbGV0IGtleXdvcmRcbmxldCBuYW1lID0gJ0pvaG4nO1xubGV0IHByb2Zlc3Npb24gPSAnZG9jdG9yJztcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLy8gY29uc3Qga2V5d29yZFxuY29uc3QgcHJvZmlsZSA9ICd1c2VyJztcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLy8gZGVmYXVsdCBwYXJhbWV0ZXJzIG9uIGZ1bmN0aW9uc1xuZnVuY3Rpb24gY2FsY3VsYXRlU3VtKGEgPSAxLCBiID0gMiwgYyA9IDMpIHtcbiAgICBjb25zb2xlLmxvZyhhICsgYiArIGMpO1xufVxuXG5jYWxjdWxhdGVTdW0oKTtcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuLy8gc3ByZWFkIG9wZXJhdG9yXG5mdW5jdGlvbiBjYWxjdWxhdGVBcmVhKGEsIGIpIHtcbiAgICBsZXQgYXJlYSA9IGEgKiBiO1xuICAgIGNvbnNvbGUubG9nKGFyZWEpO1xufVxuXG5sZXQgc2lkZXMgPSBbMiwgM107XG5cbmNhbGN1bGF0ZUFyZWEoLi4uc2lkZXMpO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4vLyBkZWNsYXJlIGEgY2xhc3Ncbi8qIEFsbCB0aGUgbWV0aG9kcyBpbnNpZGUgdGhlIGJvZHkgb2YgdGhlIGNsYXNzIGFyZSBhZGRlZCB0byB0aGUgcHJvdG90eXBlIHByb3BlcnR5IG9mIHRoZSBjbGFzcyAqL1xuY2xhc3MgUHVwaWwge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICB9XG5cbiAgICBwcmludFB1cGlsUHJvZmlsZSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJUaGUgcHVwaWwncyBuYW1lIGlzIFwiICsgdGhpcy5uYW1lICsgXCIgYW5kIHRoZSBhZ2UgaXMgXCIgKyB0aGlzLmFnZSk7XG4gICAgfVxufVxuXG52YXIgcCA9IG5ldyBQdXBpbChcIk1pY2hhZWxcIiwgMTIpO1xucC5wcmludFB1cGlsUHJvZmlsZSgpO1xuXG4vLyBiaW5hcnkgbm90YXRpb24gZm9yIG51bWJlcnNcbmxldCBvbmVOdW1iZXIgPSAwYjAwMDAxMDEwMDtcblxuLy8gTWF0aCBtZXRob2RzIGluIGVzNlxuY29uc29sZS5sb2coTWF0aC5jb3NoKDkwKSk7XG5jb25zb2xlLmxvZyhNYXRoLmNicnQoOCkpO1xuXG4vLyByZXBlYXQgY291bnQgbWV0aG9kXG5jb25zb2xlLmxvZyhcInh5elwiLnJlcGVhdCgzKSk7XG5cbi8vIGVuZHNXaXRoIG1ldGhvZFxudmFyIHN0ciA9IFwiSm9obiBTbWl0aFwiO1xuY29uc29sZS5sb2coc3RyLmVuZHNXaXRoKFwiU21pdGhcIikpO1xuXG4vLyBBcnJheXMgLSBhcnJheS5mcm9tKGl0ZXJhYmxlT2JqZWN0LCBtYXBGdW5jdGlvbiwgdGhpcykgbWV0aG9kXG5sZXQgbnVtYmVycyA9IFwiNjc4OTAyMzExXCI7XG5sZXQgdGhlT2JqZWN0ID0ge1xuICAgIG51bWJlcjogMVxufTtcbmxldCBhcnJheSA9IEFycmF5LmZyb20obnVtYmVycywgZnVuY3Rpb24odmFsKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHZhbCkgKyB0aGlzLm51bWJlcjtcbn0sIHRoZU9iamVjdCk7XG5jb25zb2xlLmxvZyhhcnJheSk7XG5cbi8qIENsYXNzZXMgYW5kIGluaGVyaXRhbmNlICovXG5sZXQgWCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xufVxuXG5YLnByb3RvdHlwZS5zYXlOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJNeSBuYW1lIGlzIFwiICsgdGhpcy5uYW1lKTtcbn1cblxuY2xhc3MgWSBleHRlbmRzIFgge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGFnZSkge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICAgICAgdGhpcy5hZ2UgPSBhZ2U7XG4gICAgfVxuXG4gICAgc2F5QWdlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFuZCBteSBhZ2UgaXMgXCIgKyB0aGlzLmFnZSk7XG4gICAgfVxufVxuXG5jbGFzcyBaIGV4dGVuZHMgWSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgYWdlLCBwcm9mZXNzaW9uKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIGFnZSk7XG4gICAgICAgIHRoaXMucHJvZmVzc2lvbiA9IHByb2Zlc3Npb247XG4gICAgfVxuXG4gICAgc2hvd0FsbERhdGEoKSB7XG4gICAgICAgIHN1cGVyLnNheU5hbWUoKTtcbiAgICAgICAgc3VwZXIuc2F5QWdlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiVGhlIHByb2Zlc3Npb24gaXMgXCIgKyB0aGlzLnByb2Zlc3Npb24pO1xuICAgIH1cbn1cblxuLy9sZXQgYVBlcnNvbiA9IG5ldyBZKFwiSm9obiBTbWl0aFwiLCAyNSk7XG4vL2FQZXJzb24uc2F5TmFtZSgpO1xuLy9hUGVyc29uLnNheUFnZSgpO1xuXG5sZXQgYW5vdGhlclBlcnNvbiA9IG5ldyBaKFwiSm9obiBTbWl0aFwiLCAzMCwgXCJkb2N0b3JcIik7XG5hbm90aGVyUGVyc29uLnNob3dBbGxEYXRhKCk7XG5cbi8vIG91dHB1dCBmcm9tIHRoZSBpbXBvcnRlZCBtb2R1bGVcbmNvbnNvbGUubG9nKHF1ZWVuKTtcbmNvbnNvbGUubG9nKGNhbGN1bGF0ZVNxdWFyZSg0KSk7XG5jb25zb2xlLmxvZyhjYWxjdWxhdGVDdWJpYyg0KSk7XG5cbi8vIEdlbmVyYXRvcnNcbmZ1bmN0aW9uKiBnZW5lcmF0b3JGdW5jKClcbntcbiAgeWllbGQgMTtcbiAgeWllbGQgMjtcbiAgeWllbGQgMztcbiAgeWllbGQgNDtcbiAgeWllbGQgNTtcbn1cblxubGV0IGdlbmVyYXRvciA9IGdlbmVyYXRvckZ1bmMoKTtcblxuY29uc29sZS5sb2coZ2VuZXJhdG9yLm5leHQoKS52YWx1ZSk7XG4iLCIvLyBleHBvcnQgdmFyaWFibGVcclxuZXhwb3J0IGNvbnN0IHF1ZWVuID0gXCJFbHNhYmV0aFwiO1xyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uc1xyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlU3F1YXJlKG4pe1xyXG4gIHJldHVybiBuICogbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0ZUN1YmljKG4pe1xyXG4gIHJldHVybiBuICogbiAqIG47XHJcbn1cclxuIl19
