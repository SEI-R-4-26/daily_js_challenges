/*-----------------------------------------------------------------
Challenge: 19-flatten

Difficulty:  Intermediate

Prompt:

- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.

Hint:

- This assignment provides an excellent opportunity to use recursion (a function that calls itself).  It can also be solved by using an inner function.

Examples:

flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array) 

flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------*/
// Your solution for 19-flatten here:
// function flatten(arr) {
//   // base case is i have no more nested arrays and I want to return my  array
//   let myArr = []
//   arr.forEach(element=> {
//     if (Array.isArray(element) === false){
//       myArr.push(element)
//       // base case
//     } else{
//       // recursive case want to merge my arrays and go deeper
//       myArr = myArr.concat(flatten(element))
//     }
//     return myArr;

// }
//   if (element.length > 0) {

//   } else {
//     myArr.push(flatten(element))
//   }
// )
// return myArr
// }

// flatten([1, [2, 3]])
// //=> [1, 2, 3]  (a new array)

// flatten([1, [2, [3, [4]]], 1, 'a', ['b', 'c']])
// //=> [1, 2, 3, 4, 1, 'a', 'b', 'c']

/*-----------------------------------------------------------------
Challenge: 28-gridTrip

Difficulty:  Intermediate

Prompt:

- This challenge uses an imaginary grid where the x coordinate increases when you move 'up' and decreases when you move 'down'.  Similarly, the y coordinate increases when you move 'right' and decreases when you move 'left'.
- Write a function called gridTrip that accepts two arguments.
- The first argument is an array containing two integers.  The first represents the starting x position on the grid.  The second integer in the array represents the starting y position.
- The second argument is a string representing "moves" using the characters 'U', 'D', 'R' & 'L' to represent moving Up, Down, Right & Left respectively.  Each direction character will be followed by digits representing how many units to move in that direction.  For example, a string of 'D15R2U4' represents moving up 15 units, to the right 2 units, and finally, down 4 units.  The direction characters will always be upper case.
- The gridTrip function should return a new array of two integers: the final x position and the final y position.  Do not modify the array argument).

Hint:
- Using the String.match method to return an array of regular expression matches can be helpful if you want to break the single string of moves into an array of distinct moves by direction.  Be sure to use the global flag, e.g. /cat/g, when defining the regexp.

Examples:

gridTrip( [0, 0], 'U2R1' ) // => [2, 1]
gridTrip( [5, 10], 'D5L15U2' ) //-> [2, -5]
gridTrip( [-22, 100], 'L2L15D50U1D9') //=> [-80, 83]
-----------------------------------------------------------------*/
// Your solution for 28-gridTrip here:
const gridTrip = (arr, dirStr) => {
  let destination = [arr[0], arr[1]]

  for (let i = 0; i < dirStr.length; i++) {
    console.log(i)
    if (dirStr[i] === 'L') {
      console.log('found L')
      let numStr = ''
      i++
      while (!isNaN(dirStr[i])) {
        numStr += dirStr[i]
        console.log(numStr)
        i++
      }
      console.log(numStr)
      destination[0] -= parseInt(numStr)
    } else if (dirStr[i] === 'R') {
      console.log('found R')
      let numStr = ''
      i++
      while (!isNaN(dirStr[i])) {
        numStr += dirStr[i]
        console.log(numStr)
        i++
      }
      destination[0] += parseInt(numStr)
    } else if (dirStr[i] === 'U') {
      console.log('found u')
      let numStr = ''
      i++
      console.log(isNaN(dirStr[i]), dirStr[i])
      while (!isNaN(dirStr[i])) {
        numStr += dirStr[i]
        console.log(numStr)
        i++
      }
      destination[1] += parseInt(numStr)
    } else if (dirStr[i] === 'D') {
      console.log('found D')
      let numStr = ''
      i++
      while (!isNaN(dirStr[i])) {
        numStr += dirStr[i]
        console.log(numStr)
        i++
      }
      destination[1] -= parseInt(numStr)
    }
  }
  console.log(destination)
  return destination
}

gridTrip([0, 0], 'U2R1') // => [2, 1]

/*-----------------------------------------------------------------
Challenge: 23-balancedBrackets

Difficulty:  Intermediate

Prompt:

- Write a function called balancedBrackets that accepts a single string as argument.
- The input string is composed entirely of parentheses, brackets and/or curly braces, i.e.,  (), [] and/or {}. Referred to as "braces" from this point forward...
- The balancedBraces function should return true if the string's braces are "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close the same type of opening bracket, ignoring already matched brackets between them.  Examples explain it best...

Examples:

balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:

const balancedBrackets = (str) => {
  // loop through array
  let bracketsArray = str.split('')
  console.log(bracketsArray)
}
