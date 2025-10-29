const doblarNumeros = (numeros) => {
    let arr = [];
    for (let i = 0; i < numeros.length; i++) {
        arr[i] = numeros[i] * 2;
    }
    return arr;
}

console.log(doblarNumeros([1, 2, 3, 4, 5, 6, 8]));
