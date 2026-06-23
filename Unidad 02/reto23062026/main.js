const Paciente = require('./paciente');
const ColaPacientes = require('./colaPaciente');

const cola = new ColaPacientes();

// Registrar pacientes
const paciente1 = new Paciente(
    "Juan Pérez",
    25,
    "Dolor de cabeza"
);

const paciente2 = new Paciente(
    "María López",
    30,
    "Control médico"
);

const paciente3 = new Paciente(
    "Carlos Torres",
    40,
    "Fiebre"
);

cola.agregarPaciente(paciente1);
cola.agregarPaciente(paciente2);
cola.agregarPaciente(paciente3);

// Mostrar cola
console.log("PACIENTES EN ESPERA");
console.log(cola.mostrarCola());

// Próximo paciente
console.log("\nPróximo paciente:");
console.log(cola.verSiguientePaciente());

// Atender paciente
console.log("\nPaciente atendido:");
console.log(cola.atenderPaciente());

// Cola actualizada
console.log("\nCOLA ACTUALIZADA");
console.log(cola.mostrarCola());

// Cantidad restante
console.log("\nPacientes en espera:");
console.log(cola.cantidadPacientes());