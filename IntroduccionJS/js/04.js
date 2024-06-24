// Objetos

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

console.log(producto);
console.table(producto);
console.log(typeof producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(typeof producto.nombre);

// const nombre = producto.nombre

// Destructuring
const {nombre} = producto

console.log(nombre);

// Object Literal Enhacement
const autenticado = true
const usuario = 'Juan'

const nuevoObjeto = {
    autenticado: autenticado,
    usuario
}

console.log(nuevoObjeto);