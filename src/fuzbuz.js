export const dscount = (str, a, b) => {
  const symbols = str.toLowerCase().split('');
  
  return symbols.reduce((count, symbol, index) =>
    (symbol === a && symbols[index + 1] === b) ? count + 1 : count
  , 0);
};

export const checkSyntax = (str) => {
  const openedBrackets = new Set(['(']);
  const closedBrackets = new Set([')']);
  const result = str.split('').reduce((stack, symbol) => {
    if (stack < 0) {
      return stack;
    }
    if (!openedBrackets.has(symbol) && !closedBrackets.has(symbol)) {
      return stack;
    } else if (openedBrackets.has(symbol)) {
      return stack + 1;
    } else if (closedBrackets.has(symbol) && stack > 0) {
      return stack - 1;
    }

    return -1;
  }, 0);

  return (result === 0) ? 0 : 1;
}
