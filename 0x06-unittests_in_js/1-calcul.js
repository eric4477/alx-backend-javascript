// 1-calcul.js

/**
 * Performs a calculation based on the type argument.
 * @param {string} type - The type of operation to perform (SUM, SUBTRACT, DIVIDE).
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} The result of the calculation or 'Error' if division by zero.
 */
// 1-calcul.js
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);

  switch (type) {
    case "SUM":
      return roundedA + roundedB;
    case "SUBTRACT":
      return roundedA - roundedB;
    case "DIVIDE":
      if (roundedB === 0) {
        return "Error";
      }
      return roundedA / roundedB;
    default:
      throw new Error("Invalid type");
  }
}

module.exports = calculateNumber;
