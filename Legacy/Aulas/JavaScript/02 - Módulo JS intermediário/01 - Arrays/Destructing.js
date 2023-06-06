let ingressos = ['1', '2', '3', '4'];
let [ingresso1, ingresso2, ...ingressosVendidos] = ingressos 
// cria outro array de acordo com o numero de variaveis passadas na declaração
// ...ingressosVendidos: Pega o restante do array que não foi atribuido a nenhuma variavel, e cria um novo array com o nome passado apos os pontos
console.log(ingresso1);
console.log(ingresso2);
console.log(ingressosVendidos);

let a = 5;
let b = 7;

[a, b] = [b, a] // troca de valores entre duas variaveis

console.log(`a = ${a} | b = ${b}`);