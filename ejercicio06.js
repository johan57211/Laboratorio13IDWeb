let productos = new Map ([
    ["Lapiz", 1],
    ["Borrador", 1.5],
    ["Cuaderno", 5],
    ["Regla", 2]
])

let total = 0;
productos.forEach((valor) => {
    total+=valor;
})

console.log("El valor de los productos es: "+ total)