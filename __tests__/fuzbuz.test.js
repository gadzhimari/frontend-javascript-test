import { dscount, checkSyntax } from '../src/fuzbuz.js';

test('Count the numbers of consecutive symbols', () => {
  expect(dscount('ab___ab__', 'a', 'b')).toBe(2);
  expect(dscount('___cd____', 'c', 'd')).toBe(1);
  expect(dscount('de_______', 'd', 'e')).toBe(1);
  expect(dscount('12_12__12', '1', '2')).toBe(3);
  expect(dscount('_ba______', 'a', 'b')).toBe(0);
  expect(dscount('_a__b____', 'a', 'b')).toBe(0);
  expect(dscount('-ab-аb-ab', 'a', 'b')).toBe(2);
  expect(dscount('aAa', 'a', 'a')).toBe(2);
});

test('checkSyntax', () => {
  expect(checkSyntax('(()')).toBe(1);
  expect(checkSyntax('(())')).toBe(0);
  expect(checkSyntax('))')).toBe(1);
  expect(checkSyntax('())')).toBe(1);
  expect(checkSyntax('(()))')).toBe(1);
  expect(checkSyntax('((())')).toBe(1);
  expect(checkSyntax('()(())')).toBe(0);
  expect(checkSyntax('(()())')).toBe(0);
  expect(checkSyntax('()(()(()))')).toBe(0);
  expect(checkSyntax('---(++++)----')).toBe(0);
  expect(checkSyntax('')).toBe(0);
  expect(checkSyntax('before ( middle []) after ')).toBe(0);
  expect(checkSyntax(') (')).toBe(1);
  expect(checkSyntax('} {')).toBe(1);
  expect(checkSyntax('<(   >)')).toBe(1);
  expect(checkSyntax('(  [  <>  ()  ]  <>  )')).toBe(0);
  expect(checkSyntax('   (      [)')).toBe(1);
});
