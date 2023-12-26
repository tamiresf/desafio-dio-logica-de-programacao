class Heroi {

    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        console.log(`${this.tipo} atacou usando ${this.ataque()}`);
    }

    ataque() {
        switch (this.tipo) {
            case "mago":
                return "magia";
            case "guerreiro":
                return "espada";
            case "monge":
                return "artes marciais";
            case "ninja":
                return "shuriken";
            default:
                return "ataque desconhecido";
        }
    }
}

const heroi = new Heroi("Luminar Guardião", 24, "guerreiro");
heroi.atacar();










