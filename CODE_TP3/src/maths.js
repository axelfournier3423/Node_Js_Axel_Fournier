/**
 * @function
 * @param {number} a
 * @param {number} b
 * Retourne la somme de a et b
 */
function addition(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Mauvais type!");
  }
  return a + b;
}

/**
 * @function
 * @param {number} a
 * @param {number} b
 * Retourne le quotient de a et b
 */
function quotient(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Mauvais type!");
  }
  else if (b === 0) {
    throw new Error("Division par 0 impossible");
  }
  return a / b;
}

module.exports = {
  addition,
  quotient,
};
