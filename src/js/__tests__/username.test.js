import Validator from '../username';

test('standard username', () => {
  const username = 'netology';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('uppercase', () => {
  const username = 'NETOLOGY';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('wave case', () => {
  const username = 'NeToLoGy';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('last capital letter', () => {
  const username = 'netologY';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('with underscore', () => {
  const username = 'Neto_Logy';
  expect(Validator.ValidateUsername(username)).toBeTruthy();
});

test('numbers starting', () => {
  const username = 'Neto_123logy';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('numbers ending', () => {
  const username = 'Neto-logy';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});

test('dash ending', () => {
  const username = 'Neto12logy';
  expect(Validator.ValidateUsername(username)).toBeFalsy();
});
