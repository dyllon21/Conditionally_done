const assert = require('assert');
var fromWhere = function(regNumber) {
  switch(regNumber){
    case 'CY':
    return 'Bellville';
  case 'CJ':
  return 'Paarl';
  case 'CA':
  return 'Cape Town';
    }
};
assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');
