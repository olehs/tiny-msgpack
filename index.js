'use strict';
module.exports = require('./lib/msgpack');

var toString = Buffer.prototype.toString;
require('./lib/buffer-util').toString = function (buffer, start, end) {
	return toString.call(buffer, 'utf8' start, end);
};
