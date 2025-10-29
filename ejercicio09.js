const auto = {
    marca: "Hyundai",
    modelo: "tiburon",
    año: 2008,

    detalles() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Año: ${this.año}`);
    }
};

auto.detalles();
