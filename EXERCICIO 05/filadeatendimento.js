const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

function agendarPaciente() {

    if (pacientes.length > 0) {

        const primeiroPaciente = pacientes.shift([0])

        const exemplo = `Paciente ${primeiroPaciente} agendado.`;

        console.clear();
        
        console.log(exemplo);
        
        console.log("Pacientes restantes na fila:", pacientes);

    } else {

        console.log("Não há pacientes na fila de atendimento.");
    }
}

function atenderPaciente(pacientes) {

    if (pacientes.length > 0) {

        const pacienteAtendido = pacientes.shift();

        console.log(`Paciente ${pacienteAtendido} atendido.`);

        console.log("Pacientes restantes na fila:", pacientes);

    } else {

        console.log("Não há pacientes na fila de atendimento.");
    }
}
function cancelarAtendimento(pacientes, pacienteCancelado) {

    const cancelarPaciente= pacientes.indexOf(pacienteCancelado);

    const pacienteCancelou = pacientes.shift([0]);

    if (cancelarPaciente !== -1) {

        pacientes.splice(cancelarPaciente, 1);

        console.log(`Atendimento do paciente ${pacienteCancelado} cancelado.`);

       } else {

        console.log(`O (a) Paciente ${pacienteCancelou} cancelou a sua vaga na fila de atendimento, a nova fila de atendimento é:`, pacientes);
    }
}


agendarPaciente([...pacientes]); 
atenderPaciente(pacientes)
cancelarAtendimento(pacientes)
