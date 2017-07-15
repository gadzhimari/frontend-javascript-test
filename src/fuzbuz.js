export const dscount = (str, a, b) => {
  const symbols = str.toLowerCase().split('');
  
  return symbols.reduce((count, symbol, index) =>
    (symbol === a && symbols[index + 1] === b) ? count + 1 : count
  , 0);
}

