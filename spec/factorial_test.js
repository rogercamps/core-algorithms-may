import { expect } from 'chai'
import factorial from '../src/factorial'

describe('factorial()', function(){

  it('should be a function', function(){
    expect(factorial).to.be.a('function')
  })

  it('returns factorial of a number', function(){
    expect(factorial(5)).to.equal(120)
  })

  it('returns factorial of a number', function(){
    expect(factorial(7)).to.equal(5040)
  })
})
