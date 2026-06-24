// Depuración Mental (La Pila de Llamadas)
function fibonacci(n) {
if (n <= 1) {
return n;
}
return fibonacci(n - 1) + fibonacci(n - 2);
}

// Optimización - Recursividad de Cola (Tail Recursion)
function factorialCola(n, acumulador = 1) {
// TODO: Escribe tu versión aquí
 if (n === 0 || n === 1) return acumulador;
 return factorialCola(n - 1, n * acumulador);
}
