'use strict';
var deepEqual = require('deep-equal');
var test = require('ava');
var condenseKeys = require('./');

test(function (t) {
	var obj = {
		a: 'foo',
		b: null,
		c: undefined,
		d: ''
	};

	t.assert(deepEqual(condenseKeys(obj), {a: 'foo'}));
	t.end();
});
