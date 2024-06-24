// Tipos de Datos

// Undefined
let cliente;

console.log(cliente);
console.log(typeof cliente);

// Strings o cadenas de texto
const text = "hola";
const onlyText = "";

console.log(text);
console.log(onlyText);
console.log(typeof text);
console.log(typeof onlyText);

// Numbers
const numero = 12.2;
const numero1 = 12;
const numero2 = "12";

console.log(numero);
console.log(numero1);
console.log(numero2);
console.log(numero1 + numero2);
console.log(typeof numero);
console.log(typeof numero1);
console.log(typeof numero2);

// BitInt
const numeroGrande = BigInt("2131321231231231213213123131");
const numeroGrande1 = BigInt(2131321231231231213213123131);
const numeroGrande2 = BigInt(true);

console.log(numeroGrande);
console.log(numeroGrande1);
console.log(numeroGrande2);
console.log(typeof numeroGrande);
console.log(typeof numeroGrande1);
console.log(typeof numeroGrande2);

// Boolean
const descuento = true;
const descuento1 = false;

console.log(descuento);
console.log(descuento1);
console.log(typeof descuento);
console.log(typeof descuento1);

// Null
const hola = null;

console.log(hola);
console.log(typeof hola);

// Symbol
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

console.log(primerSymbol);
console.log(segundoSymbol);
console.log(primerSymbol == segundoSymbol);
console.log(primerSymbol === segundoSymbol);
console.log(typeof primerSymbol);
console.log(typeof segundoSymbol);
