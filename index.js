'use strict';
var isObj = require('is-obj');
var objectAssign = require('object-assign');

function del(obj) {
	var keys = Object.keys(obj);

	for (var i = 0; i < keys.length; i++) {
		if (obj[keys[i]] === undefined || obj[keys[i]] === null || obj[keys[i]] === '') {
			delete obj[keys[i]];
		}

		if (isObj(obj[keys[i]])) {
			del(obj[keys[i]]);
		}
	}

	return obj;
}

module.exports = function (obj) {
	var o = objectAssign({}, obj);
	return del(o);
};
