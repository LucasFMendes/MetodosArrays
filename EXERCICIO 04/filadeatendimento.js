function filaAtendimento (pacientes, tipo, nome) {

    if (tipo === "Atender") {
        if (pacientes.length > 0) {
            pacientes.shift()
            console.log("Paciente removido. Nova Fila:", pacientes)
        } else {
            console.log("Não há pacientes na fila para atender")
        }
      }
     
    }

function filaAtendimentoAgendar (pacientes, tipo1, nome) {
    if (tipo1 === "Agendar") {
        if (pacientes.length >= 1) {
            pacientes.push("Lucas")
            console.log("Paciente Adicionado ao fim da fila: Nova Fila:", pacientes)
        } else {
            console.log("Paciente não adicionado")
        }
    }
}    


const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const tipo = "Atender"

const tipo1 = "Agendar"

filaAtendimento(pacientes,tipo)
filaAtendimentoAgendar(pacientes,tipo1)


// Verificar se o tipo é atender
// Se for atender será retirado o primeiro elemento do array
// Verificar se o tipo é agendar
// Se o tipo for agendar será colocado o nome do paciente no fim do array
// Imprimir a lista dos pacientes
