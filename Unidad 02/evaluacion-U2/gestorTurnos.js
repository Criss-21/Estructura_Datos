import { ColaTurnos } from './colaTurnos.js';
import { Paciente } from './Paciente.js';
import { Turno } from './turno.js';
export class GestorTurnosMedicos {
  #salaEspera;          
  #historialAtendidos;  
  #contadorTurnos;      
  
  constructor(capacidadSala) {
    this.#salaEspera         = new ColaTurnos(capacidadSala);
    this.#historialAtendidos = [];
    this.#contadorTurnos     = 0;
  }
 
  getSalaEspera(){ return this.#salaEspera; }
  getHistorial() { return [...this.#historialAtendidos]; }
  getTotalAtendidos(){ return this.#historialAtendidos.length; }

  #generarIdTurno() {
    this.#contadorTurnos++;
    return `T${String(this.#contadorTurnos).padStart(3, "0")}`;
  }
 
  emitirTurno(nombrePaciente, edad, peso, altura) {
    if (this.#salaEspera.estaLlena()) {
      console.log(`\nSala de espera llena. No se puede emitir turno para: ${nombrePaciente}.`);
      return null;
    }
 
    const nuevoPaciente = new Paciente(nombrePaciente, edad, peso, altura);
    const idTurno = this.#generarIdTurno();
    const nuevoTurno = new Turno(idTurno, nuevoPaciente);
 
    this.#salaEspera.enqueue(nuevoTurno);
 
    console.log(
      `\nTurno emitido exitosamente.` +
      `\n     ID: ${nuevoTurno.getId()} | ` +
      `Paciente: ${nuevoPaciente.getNombre()} | ` +
      `Estado: ${nuevoTurno.getEstado()}`
    );
    console.log(
      `     Posición en sala: [${this.#salaEspera.getIndiceFin() === 0 
        ? this.#salaEspera.getCapacidad() - 1 
        : this.#salaEspera.getIndiceFin() - 1}] | ` +
      `Turnos en espera: ${this.#salaEspera.getTotalTurnos()}/${this.#salaEspera.getCapacidad()}`
    );
 
    return nuevoTurno;
  }
 
  atenderSiguienteTurno() {
    if (this.#salaEspera.estaVacia()) {
      console.log("\nNo hay turnos pendientes por atender.");
      return null;
    }
 
    const turnoActual = this.#salaEspera.dequeue();
    turnoActual.setEstado(Turno.ESTADOS.ATENDIDO);
 
    this.#historialAtendidos.push(turnoActual);
 
    console.log(`\nTurno ${turnoActual.getId()} — pase a consulta!`);
    turnoActual.mostrarDetalle();
    console.log(
      `     Turnos restantes en sala: ${this.#salaEspera.getTotalTurnos()} | ` +
      `Total atendidos hoy: ${this.#historialAtendidos.length}`
    );
 
    return turnoActual;
  }
 
  cancelarTurnoPendiente() {
    if (this.#salaEspera.estaVacia()) {
      console.log("\nNo hay turnos en espera para cancelar.");
      return null;
    }
 
    const turnoCancelado = this.#salaEspera.dequeue();
    turnoCancelado.setEstado(Turno.ESTADOS.CANCELADO);
    this.#historialAtendidos.push(turnoCancelado);
 
    console.log(`\nTurno ${turnoCancelado.getId()} cancelado. Paciente: ${turnoCancelado.getPaciente().getNombre()}`);
    return turnoCancelado;
  }
 
  consultarProximoTurno() {
    const proximo = this.#salaEspera.peek();
    if (!proximo) {
      console.log("\nNo hay turnos en espera.");
    } else {
      console.log(`\nPróximo turno: ${proximo.getId()} — ${proximo.getPaciente().getNombre()}`);
    }
    return proximo;
  }
 
  mostrarMonitor() {
    console.log(`\nTurnos en espera: ${this.#salaEspera.getTotalTurnos()}`);
    if (!this.#salaEspera.estaVacia()) {
      const proximo = this.#salaEspera.peek();
      console.log(`Próximo a atender: ${proximo.getId()} — ${proximo.getPaciente().getNombre()}`);
    }
  }
 
  mostrarHistorial() {
    console.log("\n HISTORIAL DE TURNOS (JORNADA ACTUAL)");
    if (this.#historialAtendidos.length === 0) {
      console.log("  Sin registros en el historial.");
    } else {
      this.#historialAtendidos.forEach((turno, index) => {
        console.log(`  [${index + 1}] Turno: ${turno.getId()} | Estado: ${turno.getEstado()} | Paciente: ${turno.getPaciente().getNombre()}`);
      });
    }
    console.log(`\n  Total de turnos procesados: ${this.#historialAtendidos.length}`);
  }
}