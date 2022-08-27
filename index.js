function reversing (word){
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  const reversedWord = reversing(word)
  return word === reversedWord
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;