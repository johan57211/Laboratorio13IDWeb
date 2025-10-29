const contarPalabras = (texto) => {
    texto = texto.toLowerCase();
    texto = texto.split(" ");

    let conteo = new Map ();

    texto.forEach((palabra) => {
        if(conteo.has(palabra)){
            conteo.set(palabra, conteo.get(palabra)+1)
        }
        else {
            conteo.set(palabra, 1)
        }
    })
    return conteo;
}

console.log(contarPalabras("Hola hola mundo mundo mundo"));
