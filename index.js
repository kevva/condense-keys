'use strict';
const isObj = require('is-obj');

const del = obj => {
	for (const x of Object.keys(obj)) {
		if (obj[x] === undefined || obj[x] === null || obj[x] === '') {
			delete obj[x];
		}

		if (isObj(obj[x])) {
			del(obj[x]);
		}
	}

	return obj;
};

module.exports = obj => del(Object.assign({}, obj));
