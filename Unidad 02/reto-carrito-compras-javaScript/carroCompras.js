
export default class CarroCompras {
    #tablaHash;
 
    constructor() {
        this.#tablaHash = new Map();
    }
 
    agregarProducto(producto, cantidad = 1) {
        if (cantidad <= 0) 
            return false;
 
        const id = producto.getId();
 
        if (this.#tablaHash.has(id)) {
            this.#tablaHash.get(id).cantidad += cantidad;
        } else {
            this.#tablaHash.set(id, { producto, cantidad });
        }
        return true;
    }
 
    eliminarProducto(id) {
        return this.#tablaHash.delete(id);
    }
 
    actualizarCantidad(id, nuevaCantidad) {
        if (nuevaCantidad <= 0) return this.eliminarProducto(id);
 
        if (this.#tablaHash.has(id)) {
            this.#tablaHash.get(id).cantidad = nuevaCantidad;
            return true;
        }
        return false;
    }
 
    calcularTotal() {
        let total = 0;
        for (const { producto, cantidad } of this.#tablaHash.values()) {
            total += producto.getPrecio() * cantidad;
        }
        return total;
    }
 
    obtenerItems() {
        return Array.from(this.#tablaHash.values());
    }
}
