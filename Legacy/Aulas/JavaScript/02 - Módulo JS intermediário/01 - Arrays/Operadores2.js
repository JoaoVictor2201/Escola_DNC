let diasUteis = ['segunda', 'terça', 'quarta', 'quinta', 'sexta'];

console.log(diasUteis.includes("sabado")); // Verifica se o parametro passado esta contido dentro do array

console.log(diasUteis.indexOf('terça')); // Retorna a posição onde o paramentro se encontra

let frutas = ['banana', 'maçã', 'manga', 'uva'];
console.log(`Array original: ${frutas}`);

frutas.splice(2, 1, 'Limão', 'Kiwi');
// Primeira posição: em qual indice a função começará a ser executada
// Segunda posição: quantos elementos a partir do indice deverão ser removidos
// A partir da terceira posição: Elementos que serão incluídos a partir do indice 

console.log(`Array após o splice: ${frutas}`);