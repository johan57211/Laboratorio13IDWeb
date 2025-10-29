let invertirMap = (map) => {
    let mapNuevo = new Map();
    map.forEach((valor, clave) =>{
        mapNuevo.set(valor, clave)
    })
    return mapNuevo
}

const productos = new Map([
    ["Lapiz", 1],
    ["Borrador", 1.5],
    ["Cuaderno", 5],
    ["Regla", 2]
]);

const invertido = invertirMap(productos);
console.log(invertido)