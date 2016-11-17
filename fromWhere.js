const assert = require('assert');
var fromWhere = function(regNumber) {
    if (regNumber.startsWith('CY')) {
        return 'Bellville'
    }
    if (regNumber.startsWith('CJ')) {
        return 'Paarl'
    }
    if (regNumber.startsWith('CA')) {
        return 'Cape Town'
    } else {
        return 'Some other place'
    }
};
assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');
