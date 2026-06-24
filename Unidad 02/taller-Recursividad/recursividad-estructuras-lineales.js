//Inversión de un Arreglo (In-Place)
function invertirArreglo(arr, inicio, fin) {
// TODO: Identificar la condición de parada (Caso Base)
//Cuando los índices se cruzan o son iguales, la inversión terminó
if (inicio >= fin) {
    return;
}
// TODO: Realizar el intercambio e invocar la recursividad
// Intercambiar elementos en las posiciones inicio y fin
const temp = arr[inicio];
arr[inicio] = arr[fin];
arr[fin] = temp;
invertirArreglo(arr, inicio + 1, fin - 1);
}
// Casos de prueba para validación
let miLista = [10, 20, 30, 40, 50];
invertirArreglo(miLista, 0, miLista.length - 1);
console.assert(JSON.stringify(miLista) === JSON.stringify([50, 40,
30, 20, 10]));
console.log("Ejercicio 2.1 superado.");


//Búsqueda Binaria Recursiva
function busquedaBinariaRecursiva(arr, objetivo, bajo, alto) {
// TODO: Caso Base 1: El rango de búsqueda es inválido
if (bajo > alto) {
    return -1;
}
// TODO: Calcular el punto medio (entero)
const medio = Math.floor((bajo + alto) / 2);
// TODO: Caso Base 2: El elemento en el medio es el objetivo
if (arr[medio] === objetivo) {
    return medio;
}
// TODO: Casos Recursivos: Reducir el espacio de búsqueda
if (arr[medio] > objetivo) {
    return busquedaBinariaRecursiva(arr, objetivo, bajo, medio - 1);
} else {
    return busquedaBinariaRecursiva(arr, objetivo, medio + 1, alto);
}
}
// Casos de prueba para validación
const datosOrdenados = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.assert(busquedaBinariaRecursiva(datosOrdenados, 23, 0, 9)=== 5);
console.assert(busquedaBinariaRecursiva(datosOrdenados, 100, 0, 9)=== -1);
console.log("Ejercicio 2.2 superado.");
