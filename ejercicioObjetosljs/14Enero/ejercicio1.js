//Objeto
const person = { nombre: 'Juan' , edad: 25, ciudad: 'madrid '};

// Destruccion de objeto
const { nombre, edad, ciudad } = persona;

// Uso de las variables extraidas 
console.log(nombre); //'Juan'
console.log(edad); // 25
console.log(ciudad); // 'madrid

const persona = { nombre: 'Juan', edad: 25, ciudad: 'Madrid', pais: 'España' };

// Rest en la destructuracion para recoger el resto de propiedades en un objeto
 const { nombr, ...resto} = persona;
 console.log(resto);
 console.log(nombre);