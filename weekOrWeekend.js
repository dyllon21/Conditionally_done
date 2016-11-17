const assert = require('assert');
var weekOrWeekend = function(day) {

    if (!day.startsWith('S')) {
        return 'week'
    } else {
        return 'weekend'
    }
};
assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');
