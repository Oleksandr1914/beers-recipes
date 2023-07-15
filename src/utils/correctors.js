export const truncateString = (inputString) => {
  if (inputString) {
    var words = inputString.split(" ");
    var truncatedWords = words.slice(0, 20);
    var truncatedString = truncatedWords.join(" ");
  }
  return truncatedString;
};
