class PersonagemHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();
    }

    ataque() {
        const ataques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
        };

        for (let classe in ataques) {
            if (classe === this.tipo) {
                return ataques[classe];
            }
        }

        return "um ataque desconhecido";
    }

    atacar() {
        console.log(`o ${this.tipo} atacou usando ${this.ataque()}`);
    }
}

const guerreiro = new PersonagemHeroi("Aragorn", 35, "guerreiro");
const mago = new PersonagemHeroi("Gandalf", 120, "mago");
const monge = new PersonagemHeroi("Lee", 28, "monge");
const ninja = new PersonagemHeroi("Ryu", 22, "ninja");

guerreiro.atacar();
mago.atacar();
monge.atacar();
ninja.atacar();
