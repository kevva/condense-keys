'use strict';
var deepEqual = require('deep-equal');
var test = require('ava');
var condenseKeys = require('./');

test(function (t) {
	var obj = {
		a: 'foo',
		b: null,
		c: undefined,
		d: '',
		e: {
			a: null,
			b: undefined,
			c: 'foo'
		}
	};

	t.assert(deepEqual(condenseKeys(obj), {a: 'foo', e: {c: 'foo'}}));
	t.end();
});
