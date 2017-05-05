export default function collatzConjecture(num){
  let result = []
  while(num >1){
    if (n % 2 === 0) {

      result.push(num/2)
    } else if (num === 1) {
      console.log(1)
      result.push(1)
    } else {
      result.push(num*3+1)
    }

  }
return num
}

console.log(collatzConjecture(7));


//
// #### collatzConjecture
//
// Return the Collatz sequence for a given number.
//
// The Collatz sequence for any positive integer `n` is defined as follows:
//
// > If `n` is even, divide it by 2 to get `n / 2`. If `n` is odd, multiply it by 3 and add 1 to obtain `3n + 1`. Repeat the process until you reach 1.
//
// ```javascript
// collatzConjecture(1)
// // => [1]
//
// collatzConjecture(7)
// // => [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
// ```
