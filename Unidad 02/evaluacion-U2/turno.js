import { Paciente } from './Paciente.js';
export class Turno {
  #id; #paciente; #horaEmision; #estado;
 
  static ESTADOS = Object.freeze({
    EN_ESPERA: "EN_ESPERA",
    ATENDIDO:  "ATENDIDO",
    CANCELADO: "CANCELADO",
  });
 
  constructor(id, paciente) {
    if (!id || typeof id !== "string") throw new Error("[Turno] ID inválido.");
    if (!(paciente instanceof Paciente)) throw new Error("[Turno] Instancia de Paciente requerida.");
 
    this.#id          = id;
    this.#paciente    = paciente;
    this.#horaEmision = new Date().toTimeString().split(" ")[0];
    this.#estado      = Turno.ESTADOS.EN_ESPERA;
  }
 
  getId()          { return this.#id; }
  getPaciente()    { return this.#paciente; }
  getHoraEmision() { return this.#horaEmision; }
  getEstado()      { return this.#estado; }
 
  setEstado(nuevoEstado) {
    const validos = Object.values(Turno.ESTADOS);
    if (!validos.includes(nuevoEstado)) throw new Error(`[Turno] Estado inválido: "${nuevoEstado}".`);
    this.#estado = nuevoEstado;
  }

  mostrarDetalle() {
    console.log(`     Detalle -> Paciente: ${this.#paciente.getNombre()} | Emitido: ${this.#horaEmision}`);
  }
}