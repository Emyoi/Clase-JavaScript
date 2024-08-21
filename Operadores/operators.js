//! Operadores Aritmeticos

// Creacion de una funcion que sume 2 valores
function suma(a, b) {
  return a + b;
}

// Creacion de una funcion que reste 2 valores
function resta(a, b) {
  return a - b;
}

// Creacion de una funcion que divida 2 valores
function division(a, b) {
  return a / b;
}

// Creacion de una funcion que multiplique 2 valores
function multiplicacion(a, b) {
  return a * b;
}

// Creacion de una funcion que de el residuo de 2 valores
function residuo(x, y) {
  const z = x % y;
  return z;
}

//! Operadores de Asignacion
let x = 5;

// =
const isMarried = true;

// +=
x += 5;
console.log(x);

// -=
x -= 6;
console.log(x);

// *=
x *= 2;
console.log(x);

// /=
x /= 2;
console.log(x);

// %=
x %= 2;
console.log(x);

x = 4;
// **=
x **= 2;
console.log(x);

//! condicionales
x = 100;

// ==
if (x == 100) {
  console.log(`${x} es igual en valor a 100`);
}

// ===
if (x === "100") {
  console.log(`${x} es igual en valor y tipo a string:'100'`);
} else {
  console.log(`${x} es igual en valor y tipo a number:100`);
}

// !=
// if (x != )
