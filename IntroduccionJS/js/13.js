// Funciones Declaration

function sumar() {
  console.log(1 + 2);
}

function sumar2() {
  console.log(2 + 2);
}

function sumarNumeros(numero1 = 0, numero2 = 0) {
  console.log(numero1, numero2);
  console.log(numero1 + numero2);
}

sumar();
sumar();
sumar();
sumar();
sumar2();
sumarNumeros(2, 4);
sumarNumeros(2);
