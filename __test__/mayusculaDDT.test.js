// TEST

const isUpperCase = require('../utils/esmayuscula');

describe('check capital letter', () => {
    test.each`
      firstValue | expectedResult    
      ${'HELLO'} |  ${true}
      ${'hello'} |  ${false}
    `('$firstValue should return $expectedResult', ({firstValue, expectedResult}) => {
      expect(isUpperCase(firstValue)).toBe(expectedResult);
    });
  });