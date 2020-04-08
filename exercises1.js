
// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.

getNumberType = (number) => {
    return number % 2 === 0 ? 'even' : 'odd';
};

console.log(`Number type is: ${getNumberType(123)}`);
console.log(`Number type is: ${getNumberType(35)}`);
console.log(`Number type is: ${getNumberType(70)}`);

// 2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

isDivisible = (number1, number2) => {
    let isDivisible = null;
    if ((number1 % number2 === 0) || (number2 % number1 === 0)) {
        isDivisible = 1;
    } else {
        isDivisible = 0;
    }
    return isDivisible;
};

console.log(`Is divisible? ${isDivisible(3, 14)}`)
console.log(`Is divisible? ${isDivisible(18, 2)}`)
console.log(`Is divisible? ${isDivisible(7, 21)}`)

// 3. Given two variables, which are the angles of a triangle. Find the third angle of the
// triangle. (Sum of the angles of a triangle equals 180 degrees).

getThirdAngle = (firstAngle, secondAngle) => {
    return 180 - (firstAngle + secondAngle);
}

console.log(`Third angle is: ${getThirdAngle(45, 90)}`);
console.log(`Third angle is: ${getThirdAngle(30, 30)}`);
console.log(`Third angle is: ${getThirdAngle(75, 25)}`);

// 4. Given number n (positive integer). Print the value of n + nn + nnn(not multiplication).

getMutatedNumber = (number) => {
    return `${number}` + 2 * number + 3 * number;
}

console.log(getMutatedNumber(3));
console.log(getMutatedNumber(17));
console.log(getMutatedNumber(100));

// 5. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
// number. If the last digit of the inserted number is 0, number remains the same.

getMutatedNumberExercise5 = (number) => {
    let lastDigit = number % 10;
    let newNumber = null;
    if (number < 10 || (lastDigit === 0)) {
        newNumber = number;
    } else {
        newNumber = lastDigit + `${Math.floor(number / 10)}`;
    }
    return newNumber;
}

console.log(getMutatedNumberExercise5(367))
console.log(getMutatedNumberExercise5(1002))
console.log(getMutatedNumberExercise5(250))
console.log(getMutatedNumberExercise5(8))

// 6. Given five numbers as input. Calculate and print the average of the numbers(without
//     using arrays).

getAverage = (number1, number2, number3, number4, number5) => {
    return (number1 + number2 + number3 + number4 + number5) / 5;
}

console.log(getAverage(45, -12, 0, 3, -15));
console.log(getAverage(7, 52, -23, 9, -81));

// 7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

isMultipleOfParticularNumbers = (number) => {
    let message = `${number} is not a multiple of 3, 5 or 7.`;
    let multipleNumbersText = '';
    if ((number % 3 === 0)) {
        multipleNumbersText += 3;
    }
    if ((number % 5 === 0)) {
        multipleNumbersText += multipleNumbersText ? ', 5' : '5';
    }
    if ((number % 7 === 0)) {
        multipleNumbersText += multipleNumbersText ? ', 7' : '7';
    }
    message = multipleNumbersText ? `${number} is a multiple of ${multipleNumbersText}.` : message;
    return message;
}

console.log(isMultipleOfParticularNumbers(21));
console.log(isMultipleOfParticularNumbers(35));
console.log(isMultipleOfParticularNumbers(13));
console.log(isMultipleOfParticularNumbers(420));
console.log(isMultipleOfParticularNumbers(24));

// 8. Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
//     year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
//     years and more ). Also check that age in months is between 1 and 12.

isBaby = (date, dateType) => {
    let human = '';
    if ((dateType === 'months') && (date >= 1) && (date <= 12)) {
        human = 'baby';
    }
    if (dateType === 'years') {
        if ((date >= 1) && (date <= 2)) {
            human = 'toddler';
        } else if ((date >= 3) && (date <= 12)) {
            human = 'child';
        } else if ((date >= 13) && (date <= 17)) {
            human = 'teenager';
        } else if ((date >= 18)) {
            human = 'adult';
        }
    }

    return human;
}

console.log(isBaby(8, 'months'));
console.log(isBaby(45, 'years'));
console.log(isBaby(3, 'years'));

// 9. Given three numbers. Sort them by the ascending order.

sortNumbers = (number1, number2, number3) => {
    let minNumber = Math.min(number1, number2, number3);
    let maxNumber = Math.max(number1, number2, number3);
    let averageNumber = (number1 + number2 + number3) - maxNumber - minNumber;

    return `${minNumber}, ${averageNumber}, ${maxNumber}`;
}

console.log(sortNumbers(45, 26, 78));
console.log(sortNumbers(-23, -456, 0));

// 10. Percentage marks obtained by a student in three exams are to be entered to a
// computer. An indication of Pass or Fail is given out after the three marks are entered.
// The criteria for passing are as follows:
// a. A student passes if all three examinations are passed.
// b. Additionally a student may pass if only one subject is failed but the overall
// average is greater than or equal to 50.
// The pass mark for an individual subject is 40.

isExamPassed = (mark1, mark2, mark3) => {

    let minNumber = Math.min(mark1, mark2, mark3);
    let maxNumber = Math.max(mark1, mark2, mark3);
    let averageNumber = (mark1 + mark2 + mark3) - maxNumber - minNumber;

    let isPassed = null;
    let totalMarks = mark1 + mark2 + mark3;
    if ((totalMarks / 3 >= 50) && averageNumber >= 40) {
        isPassed = 'Passed';
    } else {
        isPassed = 'Not Passed';
    }
    return isPassed;
}

console.log(isExamPassed(65, 70, 60));
console.log(isExamPassed(10, 85, 75));
console.log(isExamPassed(35, 25, 40));
console.log(isExamPassed(20, 40, 40));


// 11. Find the sign of product of three numbers without multiplication operator. Display the
// specified sign.

getSignOfProduct = (number1, number2, number3) => {
    let signNumber = 0;
    let sign = null;
    if (number1 < 0) {
        signNumber++;
    }
    if (number2 < 0) {
        signNumber++;
    }
    if (number3 < 0) {
        signNumber++;
    }

    if (signNumber % 2 === 0) {
        sign = '+';
    } else {
        sign = '-';
    }

    if (number1 === 0 || number2 === 0 || number3 === 0) {
        sign = 'unsigned'
    }

    return sign;
}

console.log(getSignOfProduct(-14, 5, 0))
console.log(getSignOfProduct(-8, 9, -6))
console.log(getSignOfProduct(4, 19, -2))

// 12. Input three numbers a, b, c respectively, where a is a non zero number and write a
// program to solve quadratic equations: . (Hint: use Math.pow or Math.sqrt).

getQuadraticEquationsAnswer = (a, b, c) => {
    let message = "Solution does not exists";
    if (a !== 0) {
        let dValue = Math.sqrt(Math.pow(b, 2) - 4 * a * c)
        const x1 = (-b + dValue) / (2 * a);
        const x2 = (-b - dValue) / (2 * a);

        if (!Number.isNaN(x1) && !Number.isNaN(x2)) {
            if (x1 !== x2) {
                message = `Solutions are ${x2} and ${x1}`;
            } else {
                message = `Solution is ${x1}`;
            }
        }
    } else {
        message = "Enter valid constants";
    }

    return message;
}

console.log(getQuadraticEquationsAnswer(1, 2, 1))
console.log(getQuadraticEquationsAnswer(0, 4, -5))
console.log(getQuadraticEquationsAnswer(3, -8, 12))
console.log(getQuadraticEquationsAnswer(5, -13, 6))

// 13. Given the following code rewrite it using only two if operators. (Hint: use logical
//     operators).

modifiedFunction = () => {
    let n = prompt();
    let i = 0;
    let j = 0;

    if ((n % 2 === 0) && !Math.floor(n / 10)) {
        i += 1;
    }

    if ((n % 3 === 0) && (n % 10 === 1)) {
        j += 1
    }
}

//14. Insert a digit and a number. Check whether the digits contains in the number or not.

doesContainNumber = (number, digits) => {
    return String(digits).includes(number) ? 'Yes' : 'No';
}

console.log(doesContainNumber(5, 2463));
console.log(doesContainNumber(4, 6));
console.log(doesContainNumber(8, 45689));

//15. Enter a number. Reverse its first and last digits. Print the new number.

reverseNumbers = (number) => {
    number = String(number);

    if (number.length === 1) {
        return number;
    }
    const first = number.substr(0, 1);
    const last = number.substr(-1);
    const middle = number.slice(1, -1);

    return `${last}${middle}${first}`;
}

console.log(reverseNumbers(2))
console.log(reverseNumbers(13))
console.log(reverseNumbers(895796))

// 17 Write a program which will compute the area of a rectangular or a triangle after
// prompting the user to type the name of the figure name. Also check that entered
// numbers are positive.
// For the triangle entered numbers are height and and base.

getArea = (type, value1, value2) => {
    let message = null;
    if (type === 'rectangle' || type === 'triangle') {
        let area = null;
        if (type === 'triangle') {
            area = value1 * value2 / 2;
        } else {
            area = value1 * value2;
        }

        if (value1 === 0 || value2 === 0){
            message = "Please enter only positives"
        } else {
            message = `Square of the triangle is ${area}`
        }
    }
    return message;
}

console.log(getArea('triangle', 6, 7));
console.log(getArea('rectangle', 8, 5));
console.log(getArea('triangle', 0, 5));

// 18. (***) Enter a number. Find the difference between its biggest and smallest digits.

getFindDiff = (number) => {
    number = String(number);

    let max = number[0];
    let min = number[0];

    for(let i = 0; i < number.length; i++){
        if(number[i] >= max){
            max = number[i];
        } else if(number[i] <= min) {
            min = number[i]
        }
    }

    return max - min;
}

console.log(getFindDiff(5));
console.log(getFindDiff(152));
console.log(getFindDiff(4593653));