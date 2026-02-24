class PersonagemHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    ataque() {
        switch (this.tipo) {
            case "mago":
                return "usou magia";
            case "guerreiro":
                return "usou espada";
            case "monge":
                return "usou artes marciais";
            case "ninja":
                return "usou shuriken";
            default:
                return "usou um ataque desconhecido";
        }
    }

    atacar() {
        console.log(`o ${this.tipo} atacou usando ${this.ataque()}`);
    }
}

const herois = [
    new PersonagemHeroi("Aragorn", 35, "guerreiro"),
    new PersonagemHeroi("Gandalf", 120, "mago"),
    new PersonagemHeroi("Lee", 28, "monge"),
    new PersonagemHeroi("Ryu", 22, "ninja")
];

for (let indice in herois) {
    herois[indice].atacar();
}
