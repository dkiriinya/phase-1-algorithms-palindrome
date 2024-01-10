function isPalindrome(word) {
  // Convert the input word to an array of characters
  const wordArray = Array.from(word);

  // Initialize an empty array to store characters in reverse order
  let newArray = [];

  // Iterate through the characters of the input word in reverse order
  for (let i = wordArray.length - 1; i >= 0; i--) {
    // Append each character to newArray
    newArray.push(wordArray[i]);
  }

  // Convert the reversed array back to a string
  const reversedString = newArray.join('');

  // Compare the reversed string with the original input word (case-insensitive)
  if (reversedString.toLowerCase() === word.toLowerCase()) {
    // If they match, the word is a palindrome
    return true;
  } else {
    // If they don't match, the word is not a palindrome
    return false;
  }
}

/* 
  Add your pseudocode here
  make my word an array

  create a for loop that starts at the end of the array

  adds items from last to fast into a new array

  convert new array to string

  conditional statement to check if newstring and word match

  if the do i return true. if not return false
  
*/

/*
  Add written explanation of your solution here
  Parameter: The function takes a parameter word, which is the input string that needs to be checked for palindrome properties.

Array Conversion: The function converts the input word into an array of characters using Array.from(word). This allows easy manipulation of individual characters.

Reverse the Array: It then initializes an empty array newArray and uses a for loop to iterate through the characters of the input word in reverse order. It appends each character to newArray, effectively reversing the order of characters.

Convert to String: The reversed array is then converted back to a string using newArray.join(''), creating a new string in reverse order.

Comparison: The reversed string is then compared (case-insensitive) to the original input word converted to lowercase. If they match, the function returns true, indicating that the word is a palindrome. Otherwise, it returns false.

Conclusion: The function effectively determines whether the given word is the same when read backward as it is when read forward, ignoring case differences. If it is, the function returns true, otherwise, it returns false.






*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
