import {GestorTurnosMedicos} from './gestorTurnos.js';

console.log("=========================================================");
console.log("       SISTEMA DE GESTIÓN DE TURNOS MÉDICOS ");
console.log("               Cola Circular (FIFO)");
console.log("=========================================================");

const hospital = new GestorTurnosMedicos(6);

console.log("\nFASE 1: ENQUEUE");
hospital.emitirTurno("Andrés Mora", 38, 72.5, 175);
hospital.emitirTurno("Beatriz León", 52, 68.0, 162);
hospital.emitirTurno("Carlos Vega", 29, 80.3, 180);
hospital.emitirTurno("Diana Salas", 44, 60.1, 158);
hospital.emitirTurno("Ernesto Fuentes", 61, 90.0, 170);

console.log("\nFASE 2: DEQUEUE FIFO");
hospital.atenderSiguienteTurno();
hospital.atenderSiguienteTurno();

console.log("\nFASE 3: WRAP AROUND");
hospital.emitirTurno("Fanny Cruz", 35, 55.0, 160);
hospital.emitirTurno("Gabriel Ríos", 47, 85.2, 178);

console.log("\nFASE 4: SALA LLENA");
hospital.emitirTurno("Prueba Capacidad",25,70,170);
hospital.emitirTurno("Paciente Extra",40,80,175);

console.log("\nFASE 5: ATENCIÓN CONTINUA");
hospital.atenderSiguienteTurno();
hospital.atenderSiguienteTurno();
hospital.atenderSiguienteTurno();
hospital.atenderSiguienteTurno();
hospital.atenderSiguienteTurno();

console.log("\nFASE 6: COLA VACÍA");
hospital.atenderSiguienteTurno(); 

console.log("\nFASE 7: CANCELACIÓN");
hospital.emitirTurno("Helena Paz", 30, 62.0, 164);
hospital.emitirTurno("Iván Torres", 55, 78.0, 172);
hospital.consultarProximoTurno(); 
hospital.cancelarTurnoPendiente(); 
hospital.atenderSiguienteTurno(); 

console.log("\nFASE 8: HISTORIAL FINAL");
hospital.mostrarHistorial();