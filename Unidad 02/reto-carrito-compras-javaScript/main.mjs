// Importamos la clase CarroCompras desde el archivo correspondiente
import CarroCompras from "./carroCompras.js";
import Producto from "./producto.js";

// 1. Instanciar productos
const p1 = new Producto(1, "Disco Duro SSD 1TB", 85.00);
const p2 = new Producto(2, "Memoria RAM 16GB", 60.00);

// 2. Instanciar el Carrito
const carrito = new CarroCompras();

carrito.agregarProducto(p1, 1);
carrito.agregarProducto(p2, 2); 
carrito.agregarProducto(p2, 1); 

carrito.actualizarCantidad(1, 2); 

console.log(`\n Total calculado : ${carrito.calcularTotal()}`);