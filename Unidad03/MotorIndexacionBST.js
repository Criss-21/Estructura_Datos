class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword;
        this.urlCache = urlCache;
        this.visitas = 1;
        this.izquierda = null;
        this.derecha = null;
    }
}

class MotorIndexacionBST {
    constructor() {
        this.raiz = null;
    }

    // Inserta o actualiza una palabra clave (Enfoque Iterativo)
    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);
        
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
            return;
        }

        let nodoActual = this.raiz;
        while (true) {
            if (keyword === nodoActual.keyword) {
                nodoActual.visitas++; // Si ya existe, sumamos una visita
                return;
            } 
            
            if (keyword < nodoActual.keyword) {
                if (nodoActual.izquierda === null) {
                    nodoActual.izquierda = nuevoNodo;
                    return;
                }
                nodoActual = nodoActual.izquierda; // Avanzar a la izquierda
            } else {
                if (nodoActual.derecha === null) {
                    nodoActual.derecha = nuevoNodo;
                    return;
                }
                nodoActual = nodoActual.derecha; // Avanzar a la derecha (¡Esto faltaba!)
            }
        }
    }

    // TAREA DEL ESTUDIANTE: Buscar una palabra clave en el historial (O(log n) esperado)
    buscar(keyword) {
        let nodoActual = this.raiz;

        // Recorremos el árbol mientras el nodo actual no sea nulo
        while (nodoActual !== null) {
            if (keyword === nodoActual.keyword) {
                return nodoActual; // ¡Encontrado! Retornamos el nodo completo
            }
            
            // Si la palabra buscada es menor alfabéticamente, vamos a la izquierda
            if (keyword < nodoActual.keyword) {
                nodoActual = nodoActual.izquierda;
            } 
            // Si es mayor, vamos a la derecha
            else {
                nodoActual = nodoActual.derecha;
            }
        }

        return null; // Si salimos del bucle, la palabra clave no está en el árbol
    }
}

