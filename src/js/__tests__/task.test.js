import numInt from '../task';

test.each([
  ['3', 3],
  ['0', 0],
  ['-1', -1],
])('get num', (item, expected) => {
  const result = numInt(item);

  expect(result).toBe(expected);
});
