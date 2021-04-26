import getStatus from '../user';


test('Health status check', () => {
  const result = getStatus({ name: 'Маг', health: 75 });
  expect(result).toBe('healthy');
});

test('Health status check', () => {
  const result = getStatus({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});

test('Health status check', () => {
  const result = getStatus({ name: 'Маг', health: 20 });
  expect(result).toBe('wounded');
});

test('Health status check', () => {
  const result = getStatus({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('Health status check', () => {
  const result = getStatus({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
