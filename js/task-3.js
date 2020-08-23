function findLongestWord(string = '') {
  // Write code under this line
  const stringToArray = string.split(' ');
  let maxCharsInWord = stringToArray[0];

  for (const word of stringToArray) {
    if (word.length > maxCharsInWord.length) maxCharsInWord = word;
  }

  return maxCharsInWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

console.log(findLongestWord('Google do a roll'));
// 'Google'

console.log(findLongestWord('May the force be with you'));
// 'force'
