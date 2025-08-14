/**
@description
Given an array of integers `numbers`, determine whether the array contains any duplicate values. A duplicate is defined as any number that appears more than once in the array.

@type {(numbers: number[]) => boolean}

@constraint

- 1 <= `numbers.length` <= 10,000
- -1,000,000 <= `numbers[i]` <= 1,000,000

@TimeComplexity `O(n)` required to fill the Set
@SpaceComplexity `O(n)`

@example

hasDuplicates([3,2,6,5,0,3,10,3,10,5]) // => true
hasDuplicates([10,7,0,0,9]) // => true
hasDuplicates([5, 7, 1, 3]) // => false
*/
export default function hasDuplicates(numbers) {
  const set = new Set(numbers);
  return !(numbers.length === set.size);
}