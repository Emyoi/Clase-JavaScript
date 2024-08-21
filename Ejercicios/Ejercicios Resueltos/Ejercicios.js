//! Crea unan funcion que obtenga la entrada del usuario usando el aviso ("Ingrese su edad:"). Si el usuario tiene 18 años o más, muestre el mensaje: 'Tiene la edad suficiente para conducir', pero si no tiene 18 años, brinde otro mensaje que indique que debe esperar la cantidad de años que necesita para cumplir 18.

function isAdult(edad) {
  if (edad >= 18) {
    console.log(`Tiene la edad suficiente para conducir`);
  } else {
    const y = 18 - edad;
    console.log(`Te faltan ${y} años para conducir`);
  }
}

isAdult(14);

/* 
 ! Escriba una funcion que pueda calificar a los estudiantes de acuerdo con sus puntajes:
 * 80-100, A
 * 70-89, B
 * 60-69, C
 * 50-59, D
 * 0-49, F
 */

function calificar(calif) {
  if (calif >= 80 && calif <= 100) {
    console.log(`tu calificacion es A`);
  } else if (calif >= 70 && calif < 80) {
    console.log(`tu calificacion es B`);
  } else if (calif >= 60 && calif < 70) {
    console.log(`tu calificacion es C`);
  } else if (calif >= 50 && calif < 60) {
    console.log(`tu calificacion es D`);
  } else if (calif >= 0 && calif < 50) {
    console.log(`tu calificacion es F`);
  } else {
    console.log(`No es una calificacion`);
  }
}

calificar(64);

//! Escribe una funcion que diga el número de días en un mes.

function diasMes(mes) {
  switch (mes) {
    case 'Enero':
    case 'Marzo':
    case 'Mayo':
    case 'Julio':
    case 'Agosto':
    case 'Octubre':
    case 'Diciembre':
      console.log(`El mes ${mes} tiene 31 dias`);
      break;
    case 'Abril':
    case 'Junio':
    case 'Septiembre':
    case 'Noviembre':
      console.log(`El mes ${mes} tiene 30 dias`);
      break;
    case 'Febrero':
      console.log(`El mes ${mes} tiene 30 dias`);
      break;
    default:
      console.log(`mes no valido use esta sintaxis de ejemplo (Agosto)`);
  }
}

diasMes(`Febrero`);
