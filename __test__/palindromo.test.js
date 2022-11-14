// TEST
const palindromo = require('../utils/palindromo.js')

test ('palindromo de sandra',() => {
    const result = palindromo('sandra')
    expect(result).toBe('ardnas')
})

test ('palindromo de ana',() => {
    const result = palindromo('ana')
    expect(result).toBe('ana')
})