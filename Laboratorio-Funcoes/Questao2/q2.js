

function cloneArray(arrayorg) {
    return arrayorg.slice();
}

array1 = [15,12]

array2 = cloneArray(array1);

console.log(array2);

console.log(array1 == cloneArray);