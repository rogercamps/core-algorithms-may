export default function fibonacci(num){
  let numbers = [0,1]
  for (let i = 1; i <= num - 2; i++){
    numbers.push(numbers[numbers.length-1] + numbers[numbers.length-2])
  }
  return numbers
}

// #### fibonacci
//
// Return an array of Fibonacci numbers to the _nth_ position.
//
// ```javascript
// fibonacci(10)
// // => [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// ```
