class Jogador {
    constructor(nome, posicao, gols, aposentado) {
        this.nome = nome
        this.posicao = posicao
        this.gols = gols
        this.aposentado = aposentado
    }

    GolsMarcados = () => {
        if (this.aposentado) {
            console.log(`O ${this.nome} marcou ${this.gols} durante sua carreira`);
        } else {
            console.log(`O ${this.nome} ja marcou ${this.gols} gols na carreira`)
        }
    }
}

const Neymar = new Jogador('Neymar', 'Atacante', 400, false)
Neymar.GolsMarcados()
const Pele = new Jogador('Pelé', 'Atacante', 1000, true)
Pele.GolsMarcados();

console.log(typeof Neymar);