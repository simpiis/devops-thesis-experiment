const verify = require('../frontend/login');

test('Confirms input username + password to be equal to hardcoded value', () => {
  expect(verify('André', '123456789')).toBe(true);
});