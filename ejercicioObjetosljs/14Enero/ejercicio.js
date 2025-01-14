//Renombrar las variables durante la desestructuracion de objetos

// objeto
const person = { nombre: 'Juan', edad: 25, ciudad: 'Madrid'}

// Destruccion con renombramiento
const { nombre: aliasNombre, edad: aliasEdad, ciudad: aliasCiudad } = person;

// Uso de las variables extraidas con nuevos nombres
console.log(aliasNombre); //'Juan'
console.log(aliasEdad); // 25
console.log(aliasCiudad); // 'Madrid'