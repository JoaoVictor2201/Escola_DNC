let ingressos = ['1', '2', '3', '4', '5', '6'];

console.log(`Array original ${ingressos}`);

ingressos.push('6'); // Adicoina novos itens no array na ultima posição
console.log(`push 6 ${ingressos}`);

ingressos.unshift('14'); // Adiciona novos intens no array na primeira posição
console.log(`unshift 14 ${ingressos}`);

ingressos.pop(); // Remove o ultimo item do array
console.log(`pop ${ingressos}`);

ingressos.shift(); // Remove o primeiro item do array
console.log(`shift ${ingressos}`);

let ingressosVendidos = ingressos.slice(2, 5) // Sem valor, retorna uma cópia completa do array, mas com parametros, retorna uma parte determinada
console.log('Ingressos Vendidos: ' + ingressosVendidos);