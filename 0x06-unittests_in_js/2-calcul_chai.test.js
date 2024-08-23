describe("calculateNumber", function () {
  let expect;
  let calculateNumber;

  before(async function () {
    // Dynamically import Chai and your module
    const chaiModule = await import("chai");
    expect = chaiModule.expect;
    calculateNumber = require("./1-calcul.js");
  });

  describe("SUM operation", function () {
    it("should return the sum of rounded numbers", function () {
      expect(calculateNumber("SUM", 5.5, 2.4)).to.equal(8);
    });
  });

  describe("SUBTRACT operation", function () {
    it("should return the result of subtracting rounded b from rounded a", function () {
      expect(calculateNumber("SUBTRACT", 5.5, 2.4)).to.equal(4);
    });
  });

  describe("DIVIDE operation", function () {
    it("should return the result of dividing rounded a by rounded b", function () {
      expect(calculateNumber("DIVIDE", 5.5, 2.4)).to.equal(3);
    });
    it("should return 'Error' when dividing by zero", function () {
      expect(calculateNumber("DIVIDE", 5.5, 0)).to.equal("Error");
    });
  });
});
