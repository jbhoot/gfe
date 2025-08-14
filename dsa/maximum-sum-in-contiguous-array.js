/**
@description
Given an array of integers `numbers`, determine the subarray that has the highest product and return that product.

A subarray is a contiguous segment of an array where all elements are taken from consecutive indices, preserving their order, such as `[2, 3]` in `[1, 2, 3, 4]`, while non-contiguous selections like `[1, 3]` are not valid subarray.

@type {(numbers: number[]) => number[]}

@constraint
- The test cases are designed such that the result will fit within a 32-bit integer
- The product of any prefix or suffix of numbers is guaranteed to fit in a 32-bit integer
- 1 <= `numbers.length` <= 1000
- -10 <= `numbers[i]` <= 10

@example
maxProductSubArray([1, 2, -3, 5, 1]) // => 5
maxProductSubArray([9]) // => 9
maxProductSubArray([1, 2, 0, -1, 8, -4]) // => 32
*/
export default function maxSumSubArray(numbers) {
  /* Best sum at any point is either of the current item in the array, or the sum of the current item and all items before it.
  */

  let sumSoFar = numbers[0];
  let bestSum = sumSoFar;
  for (const currValue of numbers.slice(1)) {
    const currSum = sumSoFar + currValue;
    sumSoFar = Math.max(currValue, currSum);
    bestSum = Math.max(bestSum, sumSoFar);
  }
  return bestSum;
}
