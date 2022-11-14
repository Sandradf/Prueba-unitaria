// TEST

const palindromo = require('../utils/palindromo.js')

describe('orden', () => {
    test.each`
      firstValue | expectedResult    
      ${'sandra'}   |  ${'ardnas'}
      ${'ana'}   |  ${'ana'}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(palindromo(firstValue)).toBe(expectedResult);
    });
  });