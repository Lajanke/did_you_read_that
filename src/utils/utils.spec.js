const { upVoteCalculator, downVoteCalculator } = require('./utils');

describe('upVoteCalculator', () => {
    test('When passed nothing returns zero', () => {
        expect(upVoteCalculator()).toBe(0);
    });
    test('When passed only one parameter returns zero', () => {
        expect(upVoteCalculator(true)).toBe(0);
    });
    test('Returns the correct ammount of votes', () => {
        expect(upVoteCalculator(false, false)).toBe(1);
        expect(upVoteCalculator(false, true)).toBe(2);
        expect(upVoteCalculator(true, false)).toBe(-1);
        expect(upVoteCalculator(true, true)).toBe(0);
    });
});

describe('downVoteCalculator', () => {
    test('When passed nothing returns zero', () => {
        expect(downVoteCalculator()).toBe(0);
    });
    test('When passed only one parameter returns zero', () => {
        expect(downVoteCalculator(true)).toBe(0);
    });
    test('Returns the correct ammount of votes', () => {
        expect(downVoteCalculator(false, false)).toBe(-1);
        expect(downVoteCalculator(false, true)).toBe(1);
        expect(downVoteCalculator(true, false)).toBe(-2);
        expect(downVoteCalculator(true, true)).toBe(0);
    });
});