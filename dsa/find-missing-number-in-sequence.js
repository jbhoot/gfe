/**
 * @description
Given an array numbers of size `n` storing `n` different integers which fall within the range `[0, n]`, implement a function to identify the missing element in the array. All numbers except one are present in the array. Find the missing number.
 *
 * @type {(numbers: number[]) => boolean}
 *
 * @constraint
 * - 1 <= `n` <= 10,000
 * - 0 <= `numbers[i]` <= `n`
 *
 * @TimeComplexity `O(m + n)` => `O(n)`
 * @SpaceComplexity `O(1)`
 *
 * @example
 * findMissingNumberInSequence([1,3,0]) // => 2
 * findMissingNumberInSequence([1]) // => 0
 * findMissingNumberInSequence([3,0,4,2,1]) // => 5
 */
export default function findMissingNumberInSequence(numbers) {
  let expectedSum = 0;
  for (let i = 1; i <= numbers.length; i++) {
    expectedSum += i;
  }

  let actualSum = 0;
  for (const n of numbers) {
    actualSum += n;
  }

  return expectedSum - actualSum;
}