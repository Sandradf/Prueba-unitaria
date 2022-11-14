// TEST

const sum = require('../utils/suma');

test('2 positive numbers', () => {
    expect(sum(1,2)).toBe(3);
})

test('1 number positive, 1 number negative', () => {
    expect(sum(-1,2)).toBe(1);
})

test('2 negative numbers', () => {
    expect(sum(-1,-2)).toBe(-3);
})

test('2 decimal numbers', () => {
    expect(sum(0.4,0.3)).toBe(0.7);
})
