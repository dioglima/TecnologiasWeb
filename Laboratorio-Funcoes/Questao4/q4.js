function getFirstElements(array, n = 1) {
    return array.slice(-n);
}

array = [12,21,19];

n=2;

console.log(getFirstElements(array));
console.log(getFirstElements(array, n));