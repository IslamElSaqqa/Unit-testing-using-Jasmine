import { add,fibonacci, isEven} from '../../src/index.js';
    // spec 1: Sum
describe('Check Sum', () => { 
    // Specify the condition to test for it 
    it('should return the sum of two numbers', () => { 
        expect(add(1,3)).toBe(4);
        expect(add(5, 6)).toBe(11);
        // expect(add(5, 6)).toBe(10);// Output should be wrong
    });
}
);
    // Spec 2: Even
describe('Check Fibonacci arrays', () => { 
    it('should return an array of Fibonacci series', () => { 
        expect(fibonacci(3)).toEqual([0, 1, 1, 2]); // Test 1
        expect(fibonacci(4)).toEqual([0, 1, 1, 2,3]); // Test 2: Error; Should be [0,1,1,2,3] 
    });   
});

   // Spec 3 & 4: Check For an even Number
describe('Check for Even Number', () => {
    it('Should return true for an even number', () => {
        expect(isEven(2)).toBe(true);
        expect(isEven(6)).toBe(true);
    });
    
    it('Should return false for an odd value', () => {
        expect(isEven(3)).toBe(false); 
        expect(isEven(5)).toBe(false); 
        expect(isEven(1)).toBe(false);
    });
});

