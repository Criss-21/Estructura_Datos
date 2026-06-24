// Ejercicio 1.1: Suma de dígitos
function sumaDigitos(n) {
// TODO: Implementar el Caso Base
if (n === 0) {
    return n;
}
// TODO: Implementar el Caso Recursivo
return (n % 10) + sumaDigitos(Math.floor(n / 10));
}
// Casos de prueba para validación
console.assert(sumaDigitos(1243) === 10, "Error ensumaDigitos(1243)");
console.assert(sumaDigitos(0) === 0, "Error en sumaDigitos(0)");
console.assert(sumaDigitos(9) === 9, "Error en sumaDigitos(9)");
console.log("Ejercicio 1.1 superado.");

// Ejercicio 1.2: Potencia de un número
function potencia(base, exponente) {
    if (exponente === 0) {
    return 1;
    }
// TODO: Implementar algoritmo recursivo optimizado
if (exponente % 2 === 0) {
    const mitad = potencia(base, exponente / 2);
 return mitad * mitad;
}
}
// Casos de prueba para validación
console.assert(potencia(2, 10) === 1024, "Error en potencia(2,JavaScript10)");
console.assert(potencia(5, 3) === 125, "Error en potencia(5, 3)");
console.assert(potencia(7, 0) === 1, "Error en potencia(7, 0)");
console.log("Ejercicio 1.2 superado.");