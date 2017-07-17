export const dscount = (str, a, b) => {
  const symbols = str.toLowerCase().split('');
  
  return symbols.reduce((count, symbol, index) =>
    (symbol === a && symbols[index + 1] === b) ? count + 1 : count
  , 0);
};

export const checkSyntax = (str) => {
  const braces = new Set(['(', ')', '{', '}', '[', ']', '<', '>']);
  const pairs = { '(':')', '{':'}', '[':']', '<':'>' };
  const iter = (arr, stack) => {
    if (arr.length === 0) {
      return stack;
    }
    const [symbol, ...rest] = arr;
    if (!braces.has(symbol)){
      return iter(rest, stack);
    }
    if (pairs[symbol]) {
      return iter(rest, [symbol, ...stack]);
    }
    return (symbol !== pairs[stack[0]]) ? [1] : iter(rest, stack.slice(1));
  }
  return iter(str.split(''), []).length;
}
