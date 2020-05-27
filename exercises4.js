// 1. Given an array. Write a recursive function that removes the first element and returns
// the given array. (without using arr.unshift(),assign second element to first, third element
// to second...)

//Solution 1
getArrayWithoutFirstElement1 = (baseArray) => {
    [, ...newArray] = baseArray;

    return newArray;
}

console.log(getArrayWithoutFirstElement1([6, 78, 'n', 0, 1]));
console.log(getArrayWithoutFirstElement1([5]));
console.log(getArrayWithoutFirstElement1([])); //Why do we need to use here the recursion? Simple solution


//Solution2
getArrayWithoutFirstElement2 = (baseArray, newArray = []) => {
    if (baseArray.length === 0) {
        [, ...newArray] = newArray.reverse();
        return newArray;
    }
    newArray.push(baseArray.pop());
    return getArrayWithoutFirstElement2(baseArray, newArray);
}

console.log(getArrayWithoutFirstElement2([6, 78, 'n', 0, 1]));
console.log(getArrayWithoutFirstElement2([5]));
console.log(getArrayWithoutFirstElement2([]));


//Solution3 
getArrayWithoutFirstElement3 = (baseArray, newArray = []) => {
    if (baseArray.length === 0 || newArray.length === baseArray.length - 1) {
        return newArray;
    }
    newArray.push(baseArray[newArray.length + 1]);
    return getArrayWithoutFirstElement3(baseArray, newArray);
}

console.log(getArrayWithoutFirstElement3([6, 78, 'n', 0, 1]));
console.log(getArrayWithoutFirstElement3([5]));
console.log(getArrayWithoutFirstElement3([]));

//2. Given an object. Invert it (keys become values and values become keys). If there is
//more than key for that given value create an array.

getNewObject = (obj) => {
    let newObj = {};
    Object.entries(obj)
        .forEach(entry => {
            [entry[0], entry[1]] = [entry[1], entry[0]];
            if (!newObj[entry[0]]) {
                newObj[entry[0]] = entry[1];
            } else if (typeof newObj[entry[0]] !== 'object') {
                newObj[entry[0]] = [newObj[entry[0]], entry[1]];
            } else {
                newObj[entry[0]].push(entry[1])
            }
        })
    return newObj;
}

console.log(getNewObject({ a: '1', b: '2' }));
console.log(getNewObject({ a: '1', b: '2', c: '2' }));
console.log(getNewObject({ a: '1', b: '2', c: '2', d: '2' }));

//3. Given the list of the following readers:
//     Output the books sorted by the percent in descending order which readStatus is true.

getSortedBooks = (books) => {
    let newBooksList = books
        .filter(book => book['readStatus'])
        .sort((book1, book2) => book2['percent'] - book1['percent'])

    return newBooksList;
}

const books = [
    { book: "Catcher in the Rye", readStatus: true, percent: 40 },
    { book: "Animal Farm", readStatus: true, percent: 20 },
    { book: "Solaris", readStatus: false, percent: 90 },
    { book: "The Fall", readStatus: true, percent: 50 },
    { book: "White Nights", readStatus: false, percent: 60 },
    { book: "After Dark", readStatus: true, percent: 70 }
];

console.log(getSortedBooks(books));

// 4. Given an array and a number N.  Write a recursive function that rotates an array N
// places to the left. (Hint: to add element to the beginning use arr.unshift())

//Solution1
getRotatedArray1 = (array, number) => {
    return [...array.slice(number), ...array.slice(0, number)];
}

console.log(getRotatedArray1(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(getRotatedArray1(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

//Solution2
getRotatedArray2 = (array, number, newArray = []) => {
    if (newArray.length !== 0) {
        array.forEach(value => newArray.push(value));
        return newArray;
    }
    array.splice(number).forEach(value => newArray.push(value));
    return getRotatedArray2(array, number, newArray);
}

console.log(getRotatedArray2(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(getRotatedArray2(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));

//Solution3

getRotatedArray3 = (array, number) => {
    if (number === 0) {
        return array;
    }
    array.splice(number).reverse().forEach(value => array.unshift(value));
    number = 0;
    return getRotatedArray3(array, number);
}

console.log(getRotatedArray3(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3));
console.log(getRotatedArray3(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], -2));


// 5. Create a function that builds a tree like object given an array with object which
//contains parent and id properties.

getBuildedTree = (arr, parent = null) => {
    let result = {};
    let nodes = arr.filter((item) => item.parent === parent)
    if (Array.isArray(nodes) && nodes.length) {
        for (let node_index in nodes) {
            result[nodes[node_index].id] = getBuildedTree(arr, nodes[node_index].id)
        }
    }
    return result;
}

const parentNodes = [
    { parent: null, id: 0 },
    { parent: 0, id: 1 },
    { parent: 0, id: 2 },
    { parent: 1, id: 3 },
    { parent: 1, id: 4 },
    { parent: 2, id: 5 },
    { parent: 4, id: 6 }
];

console.log(JSON.stringify(getBuildedTree(parentNodes)));

// 6. Write a JavaScript function to get all possible subsets of given length of the given
// array.

getPossibleSubsets = (array, subsetCount) => {
    let output = [];
    subArr(0, []);

    function subArr(index, tempSubArr) {
        if (index === array.length) {
            output.push(tempSubArr);
            return;
        }
        const newIndex = index + 1;
        const extendedArray = tempSubArr.concat([array[index]]);
        subArr(newIndex, extendedArray);
        subArr(newIndex, tempSubArr);
    }

    return output.filter((element) => element.length == subsetCount);
}

console.log(getPossibleSubsets([1, 2, 3, 4], 2));
console.log(getPossibleSubsets([1, 2, 3, 4], 3));

//7. Create constructor function which instances would be objects with already
//implemented method &quot;map&quot; (like Array.map).

class TestObject {
    map = function (subFunction) {
        let output = {};
        let allValues = Object.entries(this);
        allValues.forEach((subArr) => (subArr[0] !== 'map') &&
            (output[subArr[0]] = subFunction(subArr[1])))

        return output;
    }
}

let testInstance = new TestObject();
testInstance.age1 = 1;
testInstance.age2 = 2;
testInstance.age3 = 3;

console.log(JSON.stringify(testInstance.map(age => age * 5)))