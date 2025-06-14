export default function arrayProductExcludingCurrent(numbers) {
    // uses dynamic programming
    
    // Loop through the array to create and maintain two arrays,
    // which maintain a product of all numbers for all indices,
    // in the forwards and backwards direction, respectively.
    // Now, when the array is looped through to calculate the result array,
    // then, for a given index, we have access to
    // pre-index product forwardProducts[i-1] and
    // post-index product backwardProducts[i+1],
    // thus giving us a product excluding the current index value.

    if ([0, 1].includes(numbers.length)) {
        return numbers;
    }

    const forwardProducts = new Array(numbers.length);
    const backwardProducts = new Array(numbers.length);
    let currentForwardProduct = 1;
    let currentBackwardProduct = 1;
    for(let i = 0, j = numbers.length - 1; i < numbers.length; i++, j--) {
        currentForwardProduct *= numbers[i];
        currentBackwardProduct *= numbers[j];
        forwardProducts[i] = currentForwardProduct;
        backwardProducts[j] = currentBackwardProduct;
    }

    const result = new Array(numbers.length);
    for(let i = 0; i < numbers.length; i++) {
        if (i === 0) {
            result[i] = backwardProducts[i+1];
        } else if (i === numbers.length - 1) {
            result[i] = forwardProducts[i-1];
        } else {
            result[i] = forwardProducts[i-1] * backwardProducts[i + 1];
        }
    }
    return result;
}

export function arrayProductExcludingCurrent2(numbers) {
    // If there are no zeroes in the array, then its simple: totalProduct / currentVal to exclude currentVal from the product.
    // If there is exactly one zero in the array, then the subproducts for all array indices, except the one containing the zero, would be zero, while the subproduct for the position containing the zero would be the product sans zero.
    // If there are more than one zeroes in the array, then all subproducts would be zero, because at least one factor of the multiplication is always going to be zero.  

    const numberOfZeroes = numbers.reduce((acc, curr) => curr === 0 ? acc + 1 : acc, 0);

    if (numberOfZeroes === 0) {
        const totalProduct = numbers.reduce((acc, curr) => acc * curr, 1);
        return numbers.map(n => totalProduct / n);
    } else if (numberOfZeroes === 1) {
        const productSansZero = numbers.reduce((acc, curr) => curr === 0 ? acc : acc * curr, 1);
        return numbers.map(n => n === 0 ? productSansZero : 0);
    } else {
        return numbers.map(n => 0);
    }
}