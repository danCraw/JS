// 1.   Реализовать функцию sortedUniq из библиотеки lodash.
function mySortedUnigue(arr){
let i = 0
let unique = []

    for (i of arr) {
      if (!~unique.indexOf(i)) {
        unique.push(i)
      }
    }
    return unique
}

let result = mySortedUnigue([1, 1, 2, 1, 1, 3, 2, 2, 3, 5])
console.log(result)

// 2.   Реализовать функцию isEqual из библиотеки lodash.
function myIsEquals(arg1, arg2) {
    if (arg1 === arg2) return true;

    if (!(arg1 instanceof Object) || !(arg2 instanceof Object))
        return false;

    if (arg1.constructor !== arg2.constructor)
        return false;

    for (let p in arg1) {
        if (!arg1.hasOwnProperty(p))
            continue;

        if (!arg2.hasOwnProperty(p))
            return false;

        if (arg1[p] === arg2[p])
            continue;

        if (typeof(arg1[p]) !== "object")
            return false;

        if (!object_equals(arg1[p], arg2[p]))
            return false;
    }

    for (let p in arg2)
        if (arg2.hasOwnProperty(p) && !arg1.hasOwnProperty(p))
            return false;

    return true;
}

var object = { 'a': 1 };
var other = { 'a': 1 };

const isEquals = myIsEquals(object, other)

console.log(isEquals)

// 3.   Реализовать функцию difference из библиотеки lodash.
function contains(element, arr) {
    for (i of arr) {
        if (myIsEquals(i,  element)) {
            return true
        }
    }
    return false
}

function myDifference(arr1, arr2){
let newArr = []
let repeats

for (let i of arr1){
    if (!contains(i, arr2)){
        newArr.push(i)
    }
}
    return newArr
}

console.log(myDifference([2, 3, 4], [2, 3, 5]))