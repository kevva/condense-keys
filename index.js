'use strict';
var objectAssign = require('object-assign');

module.exports = function (obj) {
	var o = objectAssign({}, obj);

	Object.keys(o).forEach(function (key) {
		if (o[key] === undefined || o[key] === null || o[key] === '') {
			delete o[key];
		}
	});

	return o;
};
