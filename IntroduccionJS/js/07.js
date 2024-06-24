// Objetos - Unir dos o mas Objetos

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: "Juan",
  premium: true,
};

const carrito = {
  cantidad: 1,
  // producto
  ...producto,
};

console.log(carrito);

const nuevoObjeto = {
  // producto: { ...producto },
  producto,
  // ...producto
  cliente: { ...cliente },
};

console.log(nuevoObjeto);

const nuevoObjeto2 = Object.assign(producto, cliente);

console.log(nuevoObjeto2);
