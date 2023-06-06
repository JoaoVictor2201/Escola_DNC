let jogador = {
    nome : 'João Victor',
    idade : 23,
    gols : 20,
    Gol(num = 0) { // Se igualar o parametro a zero, a função entende que se não houver entrada de dados, o retorno deverá ser zero
        console.log('João marcou!');
        this.gols += num;
    }
}

// jogador.Gol(2);
// console.log(jogador.gols);

jogador.posicao = 'atacante';
// console.log(jogador);

let carro = {
    nome : 'Celta',
    combustivel : 'gasolina',
    trocasDeOleo : [2020, 2022]
}

// console.log(carro.trocasDeOleo);

let selecao = [
    {
        nome : 'Neymar',
        posicao : 'Atacante'
    },
    {
        nome : 'Alison',
        posicao : 'Goleiro'
    },
    {
        nome : 'Thiago',
        posicao : 'Zagueiro'
    }
]

console.log(selecao[1].posicao);