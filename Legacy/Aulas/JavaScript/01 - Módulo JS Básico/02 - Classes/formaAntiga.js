const Jogador = function(nome, posicao, gols) {
    Nome = nome,
    Posicao = posicao,
    Gols = gols

    this.getNome = () => {
        return Nome;
    }

    this.getPos = () => {
        return Posicao;
    }

    this.getGols = () => {
        return Gols;
    }
}

const Neymar = new Jogador('Neymar', 'Atacante', 300);
console.log(Neymar);
const Cristiano = new Jogador('Cristiano Ronaldo', 'Centro avante', 500);
console.log(`Jogador: ${Cristiano.getNome()}, Função: ${Cristiano.getPos()}, Gols: ${Cristiano.getGols()}`);