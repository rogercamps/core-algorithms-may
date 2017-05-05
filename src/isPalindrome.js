export default function isPalindrome(string){
  let strLowCase = string.replace(/[^A-Z0-9]/ig, "").toLowerCase() //remove special characters & make it all lowercase
  let strReverse = strLowCase.split('').reverse().join('')

  if(strLowCase === strReverse){
    console.log('true');
  } else {
    console.log('false');
  }
}


// #### isPalindrome
//
// Determine if a string is a palindrome. Return `true` or `false`.
//
// Ignore punctuation, spacing, and case sensitivity.
//
// ```javascript
// isPalindrome('radar')
// // => true
//
// isPalindrome('bananas')
// // => false
//
// isPalindrome('A man, a plan, a canal: Panama')
// // => true
// ```
