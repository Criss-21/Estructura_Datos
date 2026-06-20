export default class Producto {
    #id; 
    #nombre;
    #precio;
    constructor(id, nombre, precio) {
        this.#id = id;
        this.#nombre = nombre;
        this.#precio = precio;
    }
    getId() {
        return this.#id;
    }
    getNombre() {
        return this.#nombre;
    }   

    getPrecio() {
        return this.#precio;
    } 
    
    setId(id) {
        this.#id = id;
    }  
    setNombre(nombre) {
        this.#nombre = nombre;
    }

    setPrecio(precio) {
        this.#precio = precio;  
    }

}