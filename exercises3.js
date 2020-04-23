//1. Write a recursive function to determine whether all digits of the number are odd or not.

areAllDigitsOdd = (number) => {
    let isOdd = true;
    let newNumber = Math.floor(number / 10);
    let lastDigit = number - newNumber * 10;
    isOdd = lastDigit % 2 !== 0;
    if (!isOdd || newNumber === 0) {
        return isOdd;
    }

    return areAllDigitsOdd(newNumber);
};

console.log(areAllDigitsOdd(4211133))
console.log(areAllDigitsOdd(7791))
console.log(areAllDigitsOdd(5))

//2. Given an array of numbers. Write a recursive function to find its minimal positive element. 
//(if such element does not exist, return -1)․

getMinPositiveNumber = (array, minimum = Infinity) => {
    if (array[0] < minimum && array[0] >= 0) {
        minimum = array[0];
    }
    array.shift();
    if (array.length === 0) {
        return minimum === Infinity ? -1 : minimum;
    }

    return getMinPositiveNumber(array, minimum);
}

console.log(getMinPositiveNumber([56, -9, 87, -23, 0, -105, 55, 1]));
console.log(getMinPositiveNumber([45, -9, 15, 5, -78]));
console.log(getMinPositiveNumber([-5, -9, -111, -1000, -7]));

//3. Write a recursive function which receives a number as arguments and returns the fibonacci sequence as array.
getFibbonacciArray = (index, array = [0, 1]) => {
    if (index <= 1) {
        return index === 0 ? [] : [1];
    }
    arrayLength = array.length;
    if (arrayLength - 1 === index) {
        array.shift();
        return array;
    }
    array.push(array[arrayLength - 1] + array[arrayLength - 2]);

    return getFibbonacciArray(index, array);
}

console.log(getFibbonacciArray(0));
console.log(getFibbonacciArray(1));
console.log(getFibbonacciArray(2));
console.log(getFibbonacciArray(3));
console.log(getFibbonacciArray(10));

//4. Given an array of nested arrays. Write a recursive function that flattens it. (Hint create function that concats arrays).
getFullArray = (array, newArray = []) => {
    for (value of array) {
        if (typeof (value) === 'number') {
            newArray.push(value);
        } else if (Array.isArray(value)) {
            getFullArray(value, newArray);
        }
    }

    return newArray;
}

console.log(getFullArray([1, [3, 4, [1, 2]], 10]));
console.log(getFullArray([14, [1, [[[3, []]], 1], 0]]));

//5. Given a number. Write a function that calculates its sum of the digits and if that sum
//has more than 1 digit find the sum of digits of that number. Repeat that process if needed and
//return the result.

calculateSum = (number) => {
    let totalSum = 0;
    while (number) {
        totalSum += number % 10;
        number = Math.floor(number / 10)
    }
    return totalSum > 9 ? calculateSum(totalSum) : totalSum;
}

console.log(calculateSum(14));
console.log(calculateSum(29));
console.log(calculateSum(999999999999));