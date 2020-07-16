var chai = require('chai')
var _ = require('lodash')
var assert = chai.assert
var f = require('../functions.js')

//validateInput
it('should return NaN when string is passed', function(){
  let input = 'abc'
  try {
    assert.equal(f.validateInput('abc'), NaN)
  }
  catch(error){
    assert.equal(error,'Input is not a number.')
  }
})

it('should parse string to number type', function(){
  let input = '2'
  assert(typeof(f.validateInput(input)) === "number")
})

//expressionToString
it('should convert JSON expression to human readable notation', function(){
  expression = {
    2:3,
    3:1,
    5:3
  }
  string = f.expressionToString(expression)
  assert.equal(string, '3x^2 + 1x^3 + 3x^5 ')
})
//addPolynominals
it('should add polynominals', function (){
  firstExpression = {
    2:2,
    1:3
  }
  secondExpression = {
    3:3,
    2:1
  }
  expectedResult = {
    3:3,
    2:3,
    1:3
  }
  result = f.addPolynominals(firstExpression, secondExpression)
  _.isEqual(expectedResult, result)
})
