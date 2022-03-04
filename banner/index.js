
const ul = document.querySelector('.banner');
const lis = ul.children;

let head = ul.firstElementChild.cloneNode(true);
ul.appendChild(head);

let cn = 0;
setInterval(autoMove, 1500);

function autoMove() {
    console.log(cn);
    cn++;
    if (cn > lis.length - 1) {
        cn = 0;
    }
    ul.style.transition = 'left .8s';
    ul.style.left = -cn * 500 + 'px';

}

ul.addEventListener('transitionend', function () {
    if (cn === lis.length - 1) {
        ul.style.transition = '';
        ul.style.left = 0;
        cn = 0
    }
})


