/**
@description
Implement a function `clamp(number, lower, upper)` to restrict a number within the inclusive lower and upper bounds.

@example
// Within the bounds, return as-is.
clamp(3, 0, 5); // => 3

// Smaller than the lower bound.
clamp(-10, -3, 5); // => -3

// Bigger than the upper bound.
clamp(10, -5, 5); // => 5

@param {number} value The number to clamp.
@param {number} lower The lower bound.
@param {number} upper The upper bound.
@returns {number} Returns the clamped number.
*/
export default function clamp(value, lower, upper) {
  if (value < lower)
    return lower;

  if (value > upper)
    return upper;

  return value;
}