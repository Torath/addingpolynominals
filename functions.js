var _ = require('lodash')


function validateInput(input) {
  result = Number(input)
  if (isNaN(result)) {
    throw 'Input is not a number.'
  }
  return result
}

function expressionToString(expression) {
  exponents = Object.keys(expression)
  result = expression[exponents[0]]+'x^'+exponents[0]+' '
  for (let i=1; i<exponents.length; i++){
    let symbol = ' '
    if (expression[exponents[i]] >= 0) symbol = '+ '
    result = result + symbol + expression[exponents[i]]+'x^'+exponents[i]+' '
  }
  return result
}

function addPolynominals (firstExpression, secondExpression) {
  const allExponents = _.union(Object.keys(firstExpression), Object.keys(secondExpression))

  let result = {}
  _.forEach(allExponents, function (exp) {
    firstCoefficient = firstExpression[exp] ? firstExpression[exp] : 0
    secondCoefficient = secondExpression[exp] ? secondExpression[exp] : 0
    result[exp] = firstCoefficient + secondCoefficient
  })
  return result
}

module.exports = { validateInput, expressionToString, addPolynominals }
