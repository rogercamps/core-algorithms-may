export default function factorial(num){
  let result = 1
  for (let i = num; i > 1; i--){
    result = result * i
  }
  return result
}

// #### factorial
//
// Return the factorial of a number.
//
// ```javascript
// factorial(5)
// // => 120
// ```
