const assert = require('assert');
var weekOrWeekend = function(day) {
    if (day.startsWith('S')){
        //console.log("is a week");
    return 'weekend'
}
 else {
    // console.log('week');
    return 'week'
}

};
weekOrWeekend('Tuesday');

assert.equal(weekOrWeekend('Tuesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');
