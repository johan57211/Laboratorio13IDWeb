const tieneDuplicados = (arr) => {
    let sinDuplicados = new Set (arr);
    if (sinDuplicados.size === arr.length){
        return false;
    }
    return true;
}

console.log(tieneDuplicados([1, 2, 3]));    // false
console.log(tieneDuplicados([1, 2, 2, 3])); // true
