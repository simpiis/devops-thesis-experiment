const user = require('../frontend/user')


test('+1 to input number', () => {
  expect(user.addClicked(1)).toBe(2);
});

test('-1 to input number', () => {
  expect(user.subClicked(1)).toBe(0);
});

