//test (calculator should add two numbers together)
//expect the sum of (number1, number2) to be (some other number)

const calculator = require('./calculator');

describe('Calculator', () => {
    //Deconstruct operations
    const { add, subtract, multiply, divide } = calculator;

    //Test 1 - Add two numbers
    it('1 + 1 = 2', () => {
        expect(add(1,1)).toBe(2);
    });

    //Test 2 - Subtract two numbers
    it('1 - 1 = 0', () => {
        expect(subtract(1,1)).toBe(0);
    });

    //Test 3 - Multiply two numbers
    it('2 * 2 = 4', () => {
        expect(multiply(2,2)).toBe(4);
    });

    //Test 4 - Divide two numbers
    it('4 / 2 = 2', () => {
        expect(divide(4,2)).toBe(2);
    });
})

//test (program to add two numbers together)
///expect the sum of (number1, number2) toBe (some other number)

//test (program to subtract two numbers)
//expect the difference of (number1, number2) toBe (some other number)

//test (program to multiply two numbers)
//expect the product of (number1, number2) toBe (some other number)

//test (program to divide two numbers)
//expect the quotient of (number1, number2) toBe (some other number)