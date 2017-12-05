function pegarElementos(el) {
    return document.getElementById(el);
}

var texto1 = pegarElementos("texto-1");
var texto2 = pegarElementos("texto-2");
texto1.style.opacity = "0";
texto2.style.opacity = "0";

function animaElementos() {

    var header = pegarElementos("header").offsetTop;
    var secao1 = pegarElementos("secao-1").offsetTop;
    var secao2 = pegarElementos("secao-2").offsetTop;
    var scrollY = window.pageYOffset;

    if (scrollY > header + window.innerHeight / 2) {

        texto1.style.opacity = "1";
        texto1.style.transform = 'translate(0px, 0px)';

    } else {

        texto1.style.opacity = "0";
        texto1.style.transform = 'translate(100px, 0px)';
    }

    if (scrollY > secao1 + window.innerHeight / 2) {

        texto2.style.opacity = "1";
        texto2.style.transform = 'translate(0px, 0px)';

    } else {
        texto2.style.opacity = "0";
        texto2.style.transform = 'translate(-100px, 0px)';
    }
}

window.onscroll = animaElementos;