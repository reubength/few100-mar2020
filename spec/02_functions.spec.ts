import { add, isEven } from './utils';

describe('functions', () => {
    describe('declaring them', () => {
        it('has two kinds and three (3!) ways to creat them', () => {
            // named functions
            function add(a: number, b: number) {
                return a + b;
            }

            // anonymous functions
            const subtract = function (a: number, b: number) {
                return a - b;
            };

            const multiply = (a: number, b: number) => a * b;
            expect(multiply(3, 3)).toBe(9);

            function doMath(a: number, b: number, f: (a: number, b: number) => number) {
                return f(a, b);
            }

            expect(doMath(2, 2, add)).toBe(4);
            expect(doMath(2, 2, subtract)).toBe(0);
            expect(doMath(2, 5, multiply)).toBe(10);

            expect(doMath(10, 2, (a, b) => a / b)).toBe(5);
        });
    });
    describe('argument to functions', () => {
        it('optional arguments', () => {
            function add(a: number = 10, b: number = 5, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }
            expect(add(undefined, 10)).toBe(20);
            expect(add()).toBe(15);
            expect(add(1)).toBe(6);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);

        });
    });
});
describe('array methods', () => {
    // Importance : 10+++;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    it('visting each member of an array', () => {
        numbers.forEach((v, i, n) => console.log({ v, i, n }));

    });
    describe('methods that create a nww array', () => {
        it('has a filter', () => {
            const evens = numbers.filter(isEven);
            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
        it('transforming each one', () => {
            const doubled = numbers.map(n => n * 2);

            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

        });
    });
});

