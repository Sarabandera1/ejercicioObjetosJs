const miObjeto = {
    nombre: "Ejemplo Objeto",
    version: 1.0,
    descripcion: "Un objeto de ejemplo con una funcion",
    mostrarInformacion: function(p1, p2){
        console.log("nombre: + this.nombre");
        console.log("Version: " + this.version);
        console.log("Descropcion: + this.descripcion");
        console.log("parametro 1: " + p1);
        console.log("parametro 2: " + p2);
    }
};

// Llamada a la funcion dentro del objeto
miObjeto.mostrarInformacion("Valor1", "Valor 2");

const persona = {
    nombre: "Juan",
    edad: 23,
    altura: 1.68,
    
}