// -- MICRO DESAFIO 2 --

let nombre = "Fulano";
let apellido = "Mengano";
let sueldoActual = 20000;
let porcentajeAumento = 25;
let calculoAumento = (sueldoActual * porcentajeAumento)/100;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log(`Hola, estimad@ : ${nombre}, ${apellido}`);
console.log(`En base a su sueldo actual: $${ sueldoActual}`);
console.log(`Ha recibido un aumento del 25%: ${calculoAumento}`)
console.log(`y su nuevo sueldo es de: $${nuevoSueldo}`);