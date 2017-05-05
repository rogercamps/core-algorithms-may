import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('returns true or false based on a string being a palindrome or not', function(){
    expect(isPalindrome('racecar')).to.equal(true)
  })

})
