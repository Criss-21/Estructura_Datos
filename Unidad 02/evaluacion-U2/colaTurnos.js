import { Turno } from './turno.js';

export class ColaTurnos {
  #cola; #frente; #fin; #total; #capacidad;
 
  constructor(capacidad) {
    if (typeof capacidad !== "number" || capacidad < 1 || !Number.isInteger(capacidad)) {
      throw new Error("[ColaTurnos] La capacidad debe ser un entero positivo.");
    }
    this.#capacidad = capacidad;
    this.#cola      = new Array(capacidad).fill(null); 
    this.#frente    = 0;   
    this.#fin       = 0;   
    this.#total     = 0;   
  }

  getTotalTurnos() { return this.#total; }
  getCapacidad()   { return this.#capacidad; }
  getFrente()      { return this.#frente; }
  getIndiceFin()   { return this.#fin; } 
  getCola()        { return this.#cola; }
 
  estaVacia() { return this.#total === 0; }
  estaLlena() { return this.#total === this.#capacidad; }
 
  enqueue(turno) {
    if (!(turno instanceof Turno)) throw new Error("[ColaTurnos] Solo instancias de Turno.");
    if (this.estaLlena()) return false;
 
    this.#cola[this.#fin] = turno;
    this.#fin = (this.#fin + 1) % this.#capacidad;
    this.#total++;
    return true;
  }
 
  dequeue() {
    if (this.estaVacia()) return null;
 
    const turnoExtraido      = this.#cola[this.#frente];
    this.#cola[this.#frente] = null; 
    this.#frente = (this.#frente + 1) % this.#capacidad;
    this.#total--;
    return turnoExtraido;
  }
 
  peek() {
    if (this.estaVacia()) return null;
    return this.#cola[this.#frente];
  }
}
 
