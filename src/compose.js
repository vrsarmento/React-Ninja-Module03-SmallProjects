'use strict'

// Exemple of how Redux compose function works

const upper = (x) => x.toUpperCase()
console.log(upper('victor'))

const underscorify = (x) => x.split('').join('_')
console.log(underscorify('victor'))

const switchValueForX = (value) => (x) => x.replace(new RegExp(value, 'g'), 'x')

const upperAndUnder = (x) => upper(underscorify(x))
console.log(upperAndUnder('victor'))

const compose = (...funcs) => (x) => 
  funcs.reduceRight((v, f) => f(v), x)

const upperAndUnder2 = compose(upper, underscorify, switchValueForX('a'))
console.log(upperAndUnder2('banana'))
