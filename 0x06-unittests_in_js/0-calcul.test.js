const assert = require("assert");
const calculateNumber = require("./0-calcul");

// Test cases for calculateNumber function

// Test case 1: Normal rounding
assert.strictEqual(calculateNumber(1.4, 2.6), 4); // 1 + 3 = 4

// Test case 2: Rounding edge case where both numbers round up
assert.strictEqual(calculateNumber(1.5, 2.5), 5); // 2 + 3 = 5

// Test case 3: Rounding edge case where one number rounds down and the other rounds up
assert.strictEqual(calculateNumber(1.4, 2.5), 4); // 1 + 3 = 4

// Test case 4: Rounding a number that is already an integer
assert.strictEqual(calculateNumber(2, 3.1), 5); // 2 + 3 = 5

// Test case 5: Negative numbers
assert.strictEqual(calculateNumber(-1.6, -2.2), -4); // -2 + -2 = -4

// Test case 6: Mixed positive and negative numbers
assert.strictEqual(calculateNumber(-1.4, 2.6), 2); // -1 + 3 = 2

// Test case 7: Zero values
assert.strictEqual(calculateNumber(0, 0), 0); // 0 + 0 = 0

console.log("All test cases passed!");
