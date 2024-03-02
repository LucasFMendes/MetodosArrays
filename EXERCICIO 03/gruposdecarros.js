function grupoDeCarros(nomes, posicao) {
        
        const grupo = nomes.slice(posicao, posicao + 3)

        console.log(grupo)
        
        }   




const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

grupoDeCarros(nomes, posicao)