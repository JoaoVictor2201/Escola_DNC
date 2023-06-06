const botao = document.getElementById('botao');

const Tabuada = () => {
    let num = document.getElementById('number');
    let mult = document.getElementById('multiplier');
    let n = Number(num.value);
    let m = Number(mult.value);
    let answer = '';
    let a = document.getElementById('answer');

    if (num.value == '' || mult.value == '') {
        a.innerHTML = '';
        alert('Preencha os dados!');
        return;
    }

    a.innerHTML = `A tabuada do ${n} é: <br>`;

    for(let i = 0; i <= m; i++) {
        answer = n * i;
        a.innerHTML += `${n} x ${i} = ${answer} <br>`;
    }
    
}

botao.addEventListener('click', Tabuada);