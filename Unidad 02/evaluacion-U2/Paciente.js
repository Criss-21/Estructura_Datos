export class Paciente {
  #nombre; #edad; #peso; #altura;
 
  constructor(nombre, edad, peso, altura) {
    if (!nombre || typeof nombre !== "string" || nombre.trim() === "") throw new Error("[Paciente] Nombre vacío.");
    if (typeof edad !== "number" || edad <= 0 || edad > 130) throw new Error("[Paciente] Edad inválida.");
    if (typeof peso !== "number" || peso <= 0) throw new Error("[Paciente] Peso inválido.");
    if (typeof altura !== "number" || altura <= 0) throw new Error("[Paciente] Altura inválida.");
 
    this.#nombre = nombre.trim();
    this.#edad   = edad;
    this.#peso   = peso;
    this.#altura = altura;
  }
 
  getNombre() { return this.#nombre; }
  getEdad()   { return this.#edad;   }
  getPeso()   { return this.#peso;   }
  getAltura() { return this.#altura; }

 
  setNombre(nombre) {
    if (!nombre || nombre.trim() === "") throw new Error("[Paciente] Nombre inválido.");
    this.#nombre = nombre.trim();
  }
  setEdad(edad) {
    if (typeof edad !== "number" || edad <= 0) throw new Error("[Paciente] Edad inválida.");
    this.#edad = edad;
  }
  setPeso(peso) {
    if (typeof peso !== "number" || peso <= 0) throw new Error("[Paciente] Peso inválido.");
    this.#peso = peso;
  }
  setAltura(altura) {
    if (typeof altura !== "number" || altura <= 0) throw new Error("[Paciente] Altura inválida.");
    this.#altura = altura;
  }
}
