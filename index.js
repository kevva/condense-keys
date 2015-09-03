'use strict';
var isObj = require('is-obj');
var objectAssign = require('object-assign');

function del(obj) {
	Object.keys(obj).forEach(function (key) {
		if (obj[key] === undefined || obj[key] === null || obj[key] === '') {
			delete obj[key];
		}

		if (isObj(obj[key])) {
			del(obj[key]);
		}
	});

	return obj;
}

module.exports = function (obj) {
	var o = objectAssign({}, obj);
	return del(o);
};
