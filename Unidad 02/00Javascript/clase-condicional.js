/*
condicionales
*/
//if
let numero = 10;
if (numero > 0) {
    console.log("El número es positivo");
}
// if / else
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//if / else if / else
let calificacion = 85;
if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 80) {
    console.log("Muy bien");
} else {
    console.log("Necesitas mejorar");
}

//switch
let dia = "Lunes";
switch (dia) {
    case "Lunes":
        console.log("Hoy es lunes");
        break;
    case "Martes":
        console.log("Hoy es martes");
        break;
    default:
        console.log("No es lunes ni martes");
        break;
}


//Clase 17/06/2026

let nombre = "Fernando"
if (nombre === "Cristian") {
    console.log("Hola Fer")
} else if (nombre === "Cristian") {
    console.log("Hola Cris")
} else {
    console.log("No encontré tu nombre")
}