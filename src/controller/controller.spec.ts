import { sum } from "./controller";

describe('sum function', () => {
    it('should return the sum of two positive numbers', () => {
        expect(sum(2, 3)).toBe(5);
        expect(sum(0, 0)).toBe(0);
        expect(sum(2, 5)).toBe(7);
    });

    it('should return the sum of two negative numbers', () => {
        expect(sum(2, -3)).toBe(-1);
        expect(sum(0, -0)).toBe(0);
        expect(sum(2, -5)).toBe(-3);
    });
});
