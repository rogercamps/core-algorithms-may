import { expect } from 'chai'
import fizzBuzz from '../src/fizzBuzz'

describe('fizzBuzz()', function(){

  it('should be a function', function(){
    expect(fizzBuzz).to.be.a('function')
  })

  it('returns an array of 1 to 100', function() {
   var fbArray = fizzBuzz(100)
   expect(fbArray.length).to.deep.equal(100)
 })
})
