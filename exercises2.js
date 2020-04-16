// 1.Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.
isPrime = (number) => {
    let endingPoint = number / 2;
    let isPrime = true;
    if (number <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < endingPoint; i++) {
            if (number % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    return isPrime ? 'yes' : 'no';
}

console.log(isPrime(401));
console.log(isPrime(63));

// 2. Given a number n ( n>= 0 ). Print nth Fibonacci number.  (Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2)
getFibbonacciNumber = (index) => {
    let firstNumber = 0;
    let secondNumber = 1;

    if (index >= 2) {
        for (let i = 2; i <= index; i++) {
            const temp = secondNumber;
            secondNumber += firstNumber;
            firstNumber = temp;
        }
    } else if (index < 2) {
        secondNumber = index;
    }

    return secondNumber;
}

//Just want to solve this example without using list :D

console.log(getFibbonacciNumber(0))
console.log(getFibbonacciNumber(2))
console.log(getFibbonacciNumber(10))
console.log(getFibbonacciNumber(20))

//3. Given a number n( n> 0 ). Print Fibonacci series up to n

printFibbonacciSeries = (number) => {
    let fibbonacciSeriesList = [0, 1]
    while (fibbonacciSeriesList[fibbonacciSeriesList.length - 1] + fibbonacciSeriesList[fibbonacciSeriesList.length - 2] < number) {
        fibbonacciSeriesList.push(fibbonacciSeriesList[fibbonacciSeriesList.length - 1] + fibbonacciSeriesList[fibbonacciSeriesList.length - 2]);
    }

    console.log(fibbonacciSeriesList)
}

printFibbonacciSeries(7)
printFibbonacciSeries(45)

//4. Insert a number. Calculate product and sum of the digits of the number. If product is divisible by the sum, print the quotient, otherwise print the remainder.
getOutput = (number) => {
    number = String(number)
    let product = 1;
    let sum = 0;
    let output = null;
    if (number != 0) {
        for (let digit of number) {
            product *= Number(digit);
            sum += Number(digit);
        }
        if (product % sum === 0) {
            output = `Quotient is ${product / sum}`;
        } else {
            output = `Remainder is ${product % sum}`;
        }
    } else {
        output = `Cannot calculate`;
    }

    return output;
}

console.log(getOutput(1233));
console.log(getOutput(2));
console.log(getOutput(0));
console.log(getOutput(455));

// 5. Given three numbers a, b (a ≤ b) and num. Create an array of evenly spaced numbers by the given num length over the specified interval (from a to b). 
getArray = (a, b, num) => {
    const range = (b - a) / (num - 1)
    let arr = [];

    if (num >= 1) {
        arr.push(a)
    }
    for (let i = 1; i < num; i++) {
        arr.push(Number((arr[arr.length - 1] + range).toPrecision(2)));
    }
    return arr;
}

console.log(getArray(1, 5, 1));
console.log(getArray(10, 100, 3));
console.log(getArray(1, 5, 6));

//6. Given an array of numbers. Find the index of the second maximum element
getIndexOfSecondMaxElement = (arr) => {
    let max1 = -Infinity;
    let max2 = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max2 = max1;
            max1 = arr[i];
        } else if (arr[i] > max2) {
            max2 = arr[i];
        }
    }

    return arr.indexOf(max2);
}

console.log(getIndexOfSecondMaxElement([23, -98, 0, -456, 12, 8]))
console.log(getIndexOfSecondMaxElement([-60, 2, 43, -18, 5, -19, 36, 7, 56]))

//7. Given an array of numbers, padding amount and repeat count. Pad the array in the following way: the padding amount specifies how many elements should be taken from the array edges, the repeat amount specifies how many times the pad should be repeated. Also, you should check that  padding amount <= length of array.
getNewModifiedArray = (inputedArray, padAmount, repeat) => {
    const startingFrom = inputedArray.slice(0, padAmount);
    const upToEnd = inputedArray.slice(inputedArray.length - padAmount, inputedArray.length);

    if (padAmount > inputedArray.length) {
        return 'Invalid padding amount';
    }

    for (let i = 0; i < repeat; i++) {
        for (let j=startingFrom.length-1;j>=0; j--){
            inputedArray.unshift(startingFrom[j]);
        }
        for (let number of upToEnd){
            inputedArray.push(number);
        }
    }

    return inputedArray;
}

console.log(getNewModifiedArray([1, 2, 3, 4], 1, 3));
console.log(getNewModifiedArray([1, 2, 3, 4], 2, 1));
console.log(getNewModifiedArray([1], 1, 3));
console.log(getNewModifiedArray([1], 2, 3));
