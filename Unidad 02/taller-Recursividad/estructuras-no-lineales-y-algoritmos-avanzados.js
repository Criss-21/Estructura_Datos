//Recorridos de Árboles Binarios
class NodoArbol {
constructor(valor) {
this.valor = valor;
this.izquierdo = null;
this.derecho = null;
}
}

function recorridoInorden(raiz) {
// TODO: Implementar el recorrido recursivo
if (raiz !== null) {
    return [...recorridoInorden(raiz.izquierdo), raiz.valor, ...recorridoInorden(raiz.derecho)];
}
}
function recorridoPreorden(raiz) {
// TODO: Implementar el recorrido recursivo
if (raiz !== null) {
    return [raiz.valor, ...recorridoPreorden(raiz.izquierdo), ...recorridoPreorden(raiz.derecho)];
}
}
function recorridoPostorden(raiz) {
// TODO: Implementar el recorrido recursivo
if (raiz !== null) {
    return [...recorridoPostorden(raiz.izquierdo), ...recorridoPostorden(raiz.derecho), raiz.valor];
}
}
