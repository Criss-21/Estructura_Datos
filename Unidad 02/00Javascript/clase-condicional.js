/*
condicionales
if / else
*/
let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//bucle for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

 //bucle while
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//bucle switch
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