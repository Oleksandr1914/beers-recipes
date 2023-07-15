export const truncateString = (inputString) => {
  if (inputString) {
    const words = inputString.split(" ");
    const truncatedWords = words.slice(0, 20);
    const truncatedString = truncatedWords.join(" ");
    return truncatedWords.length < 20
      ? truncatedString
      : truncatedString + "...";
  }
};
