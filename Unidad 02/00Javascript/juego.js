const numeroSecreto = Math.floor(Math.random() * 10 + 1) // Número aleatorio entre 1 y 10
const numeroJugador = parseInt(prompt("Adivina el número secreto (entre 1 y 10):"))

console.log(`Este es el numero con el que juegas: ${numeroJugador}`)

if (numeroJugador === numeroSecreto) {
    console.log("Felicitaciones, adivinaste el número secreto!!")
} else if (numeroJugador < numeroSecreto) {
    console.log("El número secreto es mayor. ¡Inténtalo de nuevo!")
} else {
    console.log("El número secreto es menor. ¡Inténtalo de nuevo!")
} 