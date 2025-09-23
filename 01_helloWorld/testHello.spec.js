const testHello = require('./testHello');

describe('Testing hello', function() {
  test('says "Testing, hello.. hello!"', function() {
    expect(testHello()).toEqual('Testing, hello.. hello!');
  });
});
