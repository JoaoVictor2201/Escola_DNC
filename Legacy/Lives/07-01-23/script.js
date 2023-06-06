const liEls = document.querySelectorAll('.itens-carousel li');
let index = 1;

function show(increase) {
    index += increase;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({behavior: 'smooth'});
}