// Objetos - Destructurin de dos o mas objetos

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: "Juan",
  premium: true,
  direccion: {
    calle: "calle Mexico",
  },
};

const { nombre } = producto;
const {
  nombre: nombreCliente,
  direccion: { calle },
} = cliente;

console.log(nombre);
console.log(nombreCliente);
console.log(calle);
