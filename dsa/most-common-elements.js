/**
 * @description
 * Given an array of integers `numbers` and a number `k`, find the `k` most frequent numbers in the array. Here, `k` represents the number of elements that should be returned, which are the ones that appear the most frequently. The order of the result does not matter.
 * 
 * @type {(numbers: number[], k: number) => number[]}
 * 
 * @constraint
 * - 1 <= numbers.length <= 1000
 * - -10,000 <= numbers[i] <= 10,000
 * - 1 <= k <= Number of unique elements in numbers
 * - The solution is guaranteed to have a unique result
 * 
 * @example
 * mostCommonElements([4,4,4,6,6,5,5,5], 2) // => [4,5]
 * mostCommonElements([7,7,7,8,8,9,9,9], 3) // => [7,9,8]
 * mostCommonElements([10,10,10,10,10], 1)  // => [10]
 */
export default function mostCommonElements(numbers, k) {
    if (k <= 0) {
        return [];
    }

    const occurrence = {};
    for (const n of numbers) {
        if (occurrence[n]) {
            occurrence[n] = occurrence[n] + 1;
        } else {
            occurrence[n] = 1;
        }
    }

    const entries = Object.entries(occurrence);
    
    return entries
        // sort in descending order
        .sort((aKv, bKv) => bKv[1] - aKv[1])
        // parse stringified key back to number.
        .map(kv => +kv[0])
        .slice(0, k);
}