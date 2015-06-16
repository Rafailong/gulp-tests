
'use strict';

function Calculator () {

	this.add = function (a, b) {
		return a + b;
	};

	this.substract = function (a, b) {
		return a - b;
	};

	this.multiply = function (a, b) {
		return a * b;
	};

	this.divide = function (a, b) {
		if (b === 0) return Infinity;
		if (a === 0) return 0;

		return a / b;
	}
};

module.exports = function () {
	return new Calculator();
};