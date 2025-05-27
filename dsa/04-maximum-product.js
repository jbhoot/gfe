/**
 * @description
Given an array of integers `numbers`, determine the subarray that has the highest product and return that product.

A subarray is a contiguous segment of an array where all elements are taken from consecutive indices, preserving their order, such as `[2, 3]` in `[1, 2, 3, 4]`, while non-contiguous selections like `[1, 3]` are not valid subarray.
 *
 * @type {(numbers: number[]) => number[]}
 *
 * @constraint
 * - The test cases are designed such that the result will fit within a 32-bit integer
 * - The product of any prefix or suffix of numbers is guaranteed to fit in a 32-bit integer
 * - 1 <= `numbers.length` <= 1000
 * - -10 <= `numbers[i]` <= 10
 *
 * @example
 * maxProductSubArray([1, 2, -3, 5, 1]) // => 5
 * maxProductSubArray([9]) // => 9
 * maxProductSubArray([1, 2, 0, -1, 8, -4]) // => 32
 */
function maxProductSubArray(numbers) {
  // recentMinProduct is needed due to negative numbers.
  // Multiplying a maximum product with a negative value can product a minimum product. But multiplying this minimum product with another negative value down the line in the array can turn it into the maximum product immediately.
  // Meanwhile, recentMaxProduct tracks the product of 0 and positive integers. It also keeps checking the minimum product so that it can pick the minimum product when an even-numbered negative values have converted it into the largest product available.
  // recentMinProduct wouldn't be required if only allowed values in the input array were 0 and positive integers.
  // maxProductSoFar in a given iteration holds a value that is either the current item of the array, or the maximum product of the current item and all eligible previous items, or the minimum product of the current item and
  let minProductSoFar = numbers[0];
  let maxProductSoFar = numbers[0];
  let bestMaxProduct = maxProductSoFar;

  for (const currVal of numbers.slice(1)) {
    const currMaxProduct = maxProductSoFar * currVal;
    const currMinProduct = minProductSoFar * currVal;

    maxProductSoFar = Math.max(currVal, currMaxProduct, currMinProduct);
    minProductSoFar = Math.min(currVal, currMaxProduct, currMinProduct);
    bestMaxProduct = Math.max(maxProductSoFar, bestMaxProduct);
  }
  return bestMaxProduct;
}

// console.log(maxProductSubArray([1, 2, -3, 5, 1]));
// console.log(maxProductSubArray([9]));
// console.log(maxProductSubArray([1, 2, 0, -1, 8, -4]));
console.log(maxProductSubArray([1, 2, 3, 4, 5]));