
'use strict';

describe('Calculator', function () {

	var calculator;

	before(function () {
		calculator = require('./calculator')();
	});

	it('should add two numbers', function () {
		var result = calculator.add(1, 2);
		result.should.equal(3);
	});

	it('should substract two numbers', function () {
		var result = calculator.substract(1, 2);
		result.should.equal(-1);
	});

	it('should multiply two numbers', function () {
		var result = calculator.multiply(2, 2);
		result.should.equal(4);
	});

	it('should divide and return Infinity', function () {
		var result = calculator.divide(1, 0);
		result.should.equal(Infinity);
	});

	it('should divide and return 0', function () {
		var result = calculator.divide(0, 1);
		result.should.equal(0);
	});

	it('should divide two numbers', function () {
		var result = calculator.divide(1, 1);
		result.should.equal(1);
	});
});