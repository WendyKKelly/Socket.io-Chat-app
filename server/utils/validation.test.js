const expect = require('expect');
const {isRealString} = require('./validation.js');

describe('Name and Room are valid', () => {
  it('should assert that name and room are valid strings', () => {
  var res = isRealString(98);
  expect(res).toBeFalsy();
});
  it('should reject string with only spaces', () => {
  var res = isRealString('     ');
  expect(res).toBeFalsy();
});
it('should allow string with non space values', () => {
 var res = isRealString('   Wendy   ');
  expect(res).toBeTruthy();
});
});
