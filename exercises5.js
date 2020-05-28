// 1. Given a sorted array and an element from that array. Find the index of that
// element using binary search.

function binSearchElement(array, element, preRootIndex = 0, isLeft = false) {
    const rootIndex = Math.floor(array.length / 2);
    const root = array[rootIndex];
    let realRootIndex = rootIndex;

    if (!isLeft && preRootIndex != 0) {
        realRootIndex += preRootIndex;
    }

    if ((rootIndex == 0 && element != array[0]) || (rootIndex == 1 && element != array[1])) {
        return 'does not exist';
    }

    if (root > element) {
        const leftArr = array.slice(0, rootIndex);
        return binSearchElement(leftArr, element, realRootIndex, true);
    } else if (root < element) {
        //rootIndex -1 doesn't include the root in the sliced array :)
        const rightArr = array.slice(rootIndex - 1, array.length);
        return binSearchElement(rightArr, element, realRootIndex, false);
    } else if (root === element) {
        return realRootIndex;
    }
}

console.log(binSearchElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
console.log(binSearchElement([1, 2, 3, 4], 3))
console.log(binSearchElement([1, 2, 5, 6, 7], 3))
console.log(binSearchElement([1, 2], 3))

//2. Create a function that builds a tree.

function getBuildedTree(array, parent = 'root') {
    let newTree = {}
    let parentNode = array.find(element => element.id === parent);
    parentNode.children.forEach(child => {
        newTree[child] = getBuildedTree(array, child);
    }
    )

    return newTree;
}

treeNodes = [
    { id: 'root', children: [1, 2] },
    { id: 1, children: [3, 4] },
    { id: 2, children: [5] },
    { id: 3, children: [] },
    { id: 4, children: [6] },
    { id: 5, children: [] },
    { id: 6, children: [] }
]


console.log(JSON.stringify(getBuildedTree(treeNodes)))