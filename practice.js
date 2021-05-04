/*-----------------------------------------------------------------
Challenge: 09-charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and returns an object that represents the count of each character in the string.
- The returned object should have keys that represent the character with its value set to the how many times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be counted too.

Examples:

charCount('hello') //=> { h: 1, e: 1, l: 2, o: 1 }
charCount('Today is fantastic!') //=> { T: 1, o: 1, d: 1, a: 3, y: 1, ' ': 2, i: 2, s: 2, f: 1, n: 1, t: 2, c: 1, '!': 1 }
-----------------------------------------------------------------*/
// Your solution for 09-charCount here:
function charCount(string) {
  let myObj = {}
  for (let i = 0; i < string.length; i++) {
    console.log(string.charAt(i))
    if (myObj[string[i]] >= 0) {
      console.log("already exists'")
      myObj[string[i]] = myObj[string.charAt(i)] + 1
    } else {
      console.log('need to init')
      myObj[string[i]] = 1
    }
  }
  return myObj
}

console.log(charCount('hello')) //=> { h: 1, e: 1, l: 2, o: 1 }

// Challenge: 11-isPalindrome

// Difficulty: Intermediate

// Prompt:

// - Write a function called isPalindrome that accepts a single string argument, then returns true or false depending upon whether or not the string is a palindrome.
// - A palindrome is a word or phrase that is the same forward or backward.
// - Casing and spaces are not included when considering whether or not a string is a palindrome.
// - If the length of the string is 0 or 1, return true.

// Examples:

// isPalindrome('SEI Rocks'); //=> false
// isPalindrome('rotor'); //=> true
// isPalindrome('A nut for a jar of tuna'); //=> true
// isPalindrome(''); //=> true
// -----------------------------------------------------------------*/
// // Your solution for 11-isPalindrome here:
function isPalindrome(string) {
  let palindrome = true
  if (string.length <= 1) {
    return true
  } else {
    let noSpaceString = string.split(' ').join('')

    for (let i = 0; i < Math.floor(noSpaceString.length / 2); i++) {
      if (
        noSpaceString[i].toUpperCase() !=
        noSpaceString[noSpaceString.length - i - 1].toUpperCase()
      ) {
        console.log(
          noSpaceString[i] && ' ' && noSpaceString[noSpaceString.length - i - 1]
        )
        palindrome = false
      }
    }
  }
  return palindrome
}

console.log(isPalindrome('SEI Rocks')) //=> false
console.log(isPalindrome('rotor')) //=> true
console.log(isPalindrome('A nut for a jar of tuna')) //=> true
console.log(isPalindrome('')) //=> true
