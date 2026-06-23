class ColaPacientes {
    constructor() {
        this.pacientes = [];
    }

    agregarPaciente(paciente) {
        this.pacientes.push(paciente);
    }

    atenderPaciente() {
       if (this.pacientes.length === 0) {
        return null; 
    }
    return this.pacientes.shift();
    }

    verSiguientePaciente() {
        return this.pacientes[0];
    }

    mostrarCola() {
        return this.pacientes;
    }

    cantidadPacientes() {
        return this.pacientes.length;
    }
}

module.exports = ColaPacientes;



