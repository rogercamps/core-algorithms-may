export default function fizzBuzz(){
  let fbArray = []
  for (let i = 1; i <= 100; i++){
    if(i % 3 === 0) {
      fbArray.push('Fizz')
    } else if (i % 5 === 0){
        fbArray.push('Buzz')
    } else if (i % 3 === 0 && i % 5 === 0){
        fbArray.push('FizzBuzz')
    }
    else {
      fbArray.push(i)
    }
  }
  return fbArray
}

// #### fizzBuzz [X]
//
// Return an array of numbers from 1 to 100.
//
// For multiples of three, use the string `Fizz` instead of the number and for multiples of five replace with `Buzz`.
//
// For numbers which are multiples of both three and five replace with `FizzBuzz`.
//
// ```javascript
// fizzBuzz()
// // => [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', ...]
// ```
