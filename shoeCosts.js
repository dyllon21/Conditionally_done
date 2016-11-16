const assert = require('assert');
var shoeCosts = function(nameBrand) {

    if (nameBrand == 'Nike') {
        return 'R400'
    } else if (nameBrand == 'Adidas') {
        return 'R600'
    } else {
        return 'free'
    }
};
assert.equal(shoeCosts('Nike'), 'R400');
assert.equal(shoeCosts('Adidas'), 'R600');
assert.equal(shoeCosts('Converse'), 'free')
