const liga = document.getElementById('liga');
const desliga = document.getElementById('desliga');
let lamp = document.getElementById('lampada');

const Liga = () => {
    if(!LampState()) {
        lamp.src = './media/ligada.svg';
    }
}

const Desliga = () => {
    if(!LampState()) {
        lamp.src = './media/desligada.svg';
    }
}

const Quebrou = () => {
    lamp.src = './media/quebrada.svg';
}

const LampState = () => {
    return lamp.src.indexOf('quebrada') > -1;
}

liga.addEventListener('click', Liga);
desliga.addEventListener('click', Desliga);
lamp.addEventListener('click', Quebrou);