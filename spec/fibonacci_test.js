import { expect } from 'chai'
import fibonacci from '../src/fibonacci'

describe('fibonacci()', function(){

  it('should be a function', function(){
    expect(fibonacci).to.be.a('function')
  })

  it('it adds the sum of 2 preceeding numbers into an array', function(){
    expect(fibonacci(5)).to.eql([0,1, 1, 2, 3])
  })

  it('it adds the sum of 2 preceeding numbers into an array', function(){
    expect(fibonacci(10)).to.eql([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
  })

  
})
