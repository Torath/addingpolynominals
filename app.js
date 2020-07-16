const prompt = require('prompt-sync')({sigint: true})
let f = require('./functions')


function getExpressionFromUser() {
  let isInput = true
  let result = {}

  while (isInput) {
    let coefficient
    let exponent
    try {
      coefficient = f.validateInput(prompt('coefficient: '))
      exponent = f.validateInput(prompt('exponent: '))
    }
    catch (error) {
      console.log('Incorrect input.' + error + ' Type Term again. \n')
      continue
    }

    result[exponent] = coefficient

    let next = prompt('input next term(yes/no):')
    if (['no','n'].includes(next)) isInput=false
  }
  return result
}

console.log('Input terms for first expression. Duplicated exponents will be overriden\n')
const firstExpression = getExpressionFromUser()
console.log('Input terms for second expression.\n')
const secondExpression = getExpressionFromUser()

console.log('First expression: ' + f.expressionToString(firstExpression))
console.log('Second expression: ' + f.expressionToString(secondExpression))
console.log('Polynominal addition result: ' + f.expressionToString(f.addPolynominals(firstExpression, secondExpression)))
