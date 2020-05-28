//1. Given an array. Determine whether it consists only from unique elements or not.

function doesConsistsFromUniqueElements(array) {
    let tempObj = {};
    let doesConsistFromUniqueElements = true;
    array.forEach(element => {
        if (!tempObj[element]) {
            tempObj[element] = 1;//With this solution we can also define how many times the element was used in the provided array :D
        } else {
            doesConsistFromUniqueElements = false;
        }
    });

    return doesConsistFromUniqueElements;
}

console.log(doesConsistsFromUniqueElements([1, 2, 3, 4, 4]))
console.log(doesConsistsFromUniqueElements([1, 2, 3, 4]))

// 2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.

function getSumOfNumbers(array) {
    let totalSum = 0;
    array
        .filter(number => Math.sqrt(number) % 2 === 0)
        .forEach(number => totalSum += number)

    return totalSum;
}

console.log(getSumOfNumbers([1, 2, 3, 4, 4]))
console.log(getSumOfNumbers([1, 2, 3, 4, 16]))

// 3. Check whether string is palindrome, or not.

function isPalindrome(text) {
    const arrayFromText = Array.from(text);
    let isPalindrome = true;

    for (let letterIndex in arrayFromText) {
        if (arrayFromText.length % 2 !== 0 && letterIndex === arrayFromText.length / 2) {
            continue;
        }
        if (arrayFromText[letterIndex] !== arrayFromText[arrayFromText.length - 1 - letterIndex]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}

console.log(isPalindrome('helleh'))
console.log(isPalindrome('heleleh'))
console.log(isPalindrome('helelehee'))
console.log(isPalindrome('hheh'))


// 4. Given a word and a list of possible anagrams, select the correct sublist.

function getCorrectSublist(word, anagrams) {
    const sortedArrayFromWordLetters = Array.from(word).sort();
    const wordWithSortedLetters = String(sortedArrayFromWordLetters)
    return anagrams.filter(anagram => String(Array.from(anagram).sort()) === wordWithSortedLetters);
}

console.log(getCorrectSublist('ge', ['ge', 'ne', 'eg']))
console.log(getCorrectSublist('elen', ['nele', 'ne', 'eg']))
console.log(getCorrectSublist('listen', ['enlists', 'google', 'inlets', 'banana']))
console.log(getCorrectSublist('pencil', ['licnep', 'circular', 'pupil', 'nilcpe', 'leppnec']))