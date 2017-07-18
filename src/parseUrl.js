export default (str) => {
  const parser = document.createElement('a');
  parser.href = str;
  return parser;
}
