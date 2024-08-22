// 1-calcul.test.js
const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
  describe("SUM operation", function () {
    it("should return the sum of rounded numbers", function () {
      assert.strictEqual(calculateNumber("SUM", 1.4, 2.6), 4); // 1 + 3 = 4
      assert.strictEqual(calculateNumber("SUM", 1.5, 2.5), 5); // 2 + 3 = 5
      assert.strictEqual(calculateNumber("SUM", -1.6, 2.2), 0); // -2 + 2 = 0
    });
  });

  describe("SUBTRACT operation", function () {
    it("should return the result of subtracting rounded b from rounded a", function () {
      assert.strictEqual(calculateNumber("SUBTRACT", 5.5, 2.4), 4); // 6 - 2 = 4
      assert.strictEqual(calculateNumber("SUBTRACT", 3.3, 1.8), 1); // 3 - 2 = 1
      assert.strictEqual(calculateNumber("SUBTRACT", -1.5, -2.5), 1); // -2 - (-3) = 1
    });
  });

  describe("DIVIDE operation", function () {
    it("should return the result of dividing rounded a by rounded b", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 5.5, 2.4), 3); // 6 / 2 = 3
      assert.strictEqual(calculateNumber("DIVIDE", 7.7, 2.2), 4); // 8 / 2 = 4
      assert.strictEqual(calculateNumber("DIVIDE", 3.3, 1.1), 3); // 3 / 1 = 3
    });

    it('should return "Error" when dividing by zero', function () {
      assert.strictEqual(calculateNumber("DIVIDE", 5.5, 0), "Error"); // 6 / 0 = 'Error'
      assert.strictEqual(calculateNumber("DIVIDE", -1.5, 0), "Error"); // -2 / 0 = 'Error'
    });
  });

  describe("Invalid type", function () {
    it("should throw an error for invalid type", function () {
      assert.throws(() => calculateNumber("INVALID", 1.4, 2.6), /Invalid type/);
    });
  });
});
