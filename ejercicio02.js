const filtrarYTransformar = (arr) => {
    let nuevoArr = [];
    for (let i = 0; i<arr.length; i++){
        if (arr[i] >= 0){
            nuevoArr.push(arr[i]);
        }
    }
    let suma = 0;
    for (let i = 0; i<nuevoArr.length; i++){
        nuevoArr[i] **= 2;
        suma += nuevoArr [i];
    }
    return suma;
}

console.log(filtrarYTransformar([-3, 2, 4, -1, 5]));
