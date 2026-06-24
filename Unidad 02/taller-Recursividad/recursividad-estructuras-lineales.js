function potencia(base, exponente) {
    if (exponente === 0) {
    return 1;
// TODO: Implementar algoritmo recursivo optimizado
if (exponente % 2 === 0) {
    const mitad = potencia(base, exponente / 2);
    return mitad * mitad;

}
// Casos de prueba para validación
console.assert(potencia(2, 10) === 1024, "Error en potencia(2,JavaScript10)");
console.assert(potencia(5, 3) === 125, "Error en potencia(5, 3)");
console.assert(potencia(7, 0) === 1, "Error en potencia(7, 0)");
console.log("Ejercicio 1.2 superado.");
    }
}