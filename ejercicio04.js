const eliminarNombresRepetidos = (nombres) => {
    let nombresSinRepeticion = new Set(nombres);
    return nombresSinRepeticion;
}

console.log(eliminarNombresRepetidos(["Ana", "Luis", "Ana", "Pedro", "Luis", "Luis"]));
