export default function makeChange({price, amountGiven}) {

  let object = { 'quarters': 0,'dimes': 0,'nickels': 0,'pennies': 0}

  let changeAmount = amountGiven - price

  if (changeAmount >= 25){
    Math.floor(changeAmount/25)
    let quarters = Math.floor(changeAmount/25)
    changeAmount = (changeAmount % 25)
    object.quarters = quarters
    console.log(object)
  }

  if (changeAmount >= 10){
    Math.floor(changeAmount/10)
    let dimes = Math.floor(changeAmount/10)
    changeAmount = (changeAmount % 10)
    object.dimes = dimes
    console.log(object)
  }

  if (changeAmount >= 5){
    Math.floor(changeAmount/5)
    let nickels = Math.floor(changeAmount/5)
    changeAmount = (changeAmount % 5)
    object.nickels = nickels
    console.log(object)
  }

  if (changeAmount >= 1){
    Math.floor(changeAmount/1)
    let pennies = Math.floor(changeAmount/1)
    changeAmount = (changeAmount % 1)
    object.pennies = pennies
    console.log(object)
  }
return object
}

// #### makeChange [X]
//
// Given a price and an amount paid, return the number of coins in each denomination that should be given as change.
//
// _Note: because JavaScript is [bad at decimal math](http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html), the inputs are given as integers that represent dollar + cent amounts, so `139` = $1.39._
//
// ```javascript
// makeChange({ price: 100, amountGiven: 100 })
// // => { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }
//
// makeChange({ price: 159, amountGiven: 200 })
// // => { quarters: 1, dimes: 1, nickels: 1, pennies: 1 }
//
// makeChange({ price: 432, amountGiven: 500 })
// // => { quarters: 2, dimes: 1, nickels: 1, pennies: 3 }
