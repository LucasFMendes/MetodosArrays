
function encontrarDonoDoAnimal(usuarios, animalProcurado) {
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        if (usuario.pets.includes(animalProcurado)) {
            return `O dono(a) do(a) ${animalProcurado} é o(a) ${usuario.nome}.`;
        }
    }
    return `Que pena ${animalProcurado}, não encontramos seu dono(a).`;
}

const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
];

const animalProcurado = "Max";
console.log(encontrarDonoDoAnimal(usuarios, animalProcurado));




