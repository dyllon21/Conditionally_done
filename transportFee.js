const assert = require('assert');
var transportFee = function(shift) {

    if (shift == 'morning') {
        return 'R20'
    } else if (shift == 'afternoon') {
        return 'R10'
    }
    else {
      return 'R0'
    }
};
assert.equal(transportFee('morningshift'), 'R20');
assert.equal(transportFee('afternoonshift'), 'R10');
assert.equal(transportFee('nightshift'), 'R0');
