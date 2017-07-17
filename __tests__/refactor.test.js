import { drawRating, func } from '../src/refactor';

test('drawRating', () => {
  expect(drawRating(1)).toBe(1);
  expect(drawRating(28)).toBe(2);
  expect(drawRating(50)).toBe(3);
  expect(drawRating(78)).toBe(4);
  expect(drawRating(99)).toBe(5);
});

test('func', () => {
  expect(func('', 'a', 'b')).toBe(-1);
  expect(func('Jessica', 'a', 'a')).toBe(6);
  expect(func('Jessica', 's', 'a')).toBe(6);
  expect(func('Jessica', 'c', 'i')).toBe(5);
  expect(func('Jessica', 'j', 'z')).toBe(-1);
})
