//Quitar flecha al  scrollear y degradado
window.addEventListener("scroll", function () {
    var flecha = document.querySelector(".indicador_bottom_arrow");

    flecha.classList.toggle("arrowscroll", window.scrollY > 30);


    if (screen.height < 1131) {
        var degradadofijo = document.querySelector(".degradado_backfijo");
        degradadofijo.classList.toggle("degradadofijo", window.scrollY > 1700);
    }

});

//Constantes
const slider3 = document.querySelector('#slider_index');
let sliderSection = document.querySelectorAll('.slider_section_index');
let sliderSectionLast = sliderSection[sliderSection.length - 1];
let dots_index = document.querySelectorAll('.contenedor_slider_index .dots li');
const btnprev = document.querySelector('#slider_btn_prev_index');
const btnnext = document.querySelector('#slider_btn_next_index');

let contador3 = 0


slider3.insertAdjacentElement('afterbegin', sliderSectionLast); //Inserta la ultima foto de primeras

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider_section_index')[0]; //Va tomar la primera foto
    slider3.style.marginLeft = "-200%"; // da un margin de -200
    slider3.style.transition = "all 1s"; //medio segundo es igual a 500 y un segundo 1000
    setTimeout(function () {
        slider3.style.transition = "none";
        slider3.insertAdjacentElement('beforeend', sliderSectionFirst); //Vuelve a poner la imagen de ultimas
        slider3.style.marginLeft = "-100%"; //Regresa el valor a -100
    }, 1000); //medio segundo es igual a 500 y un segundo 1000

    // Mover la clase 'active' al siguiente elemento li
    let activeDot = document.querySelector('.contenedor_slider_index .dots li.active');
    activeDot.classList.remove('active');
    if (activeDot.nextElementSibling) {
        activeDot.nextElementSibling.classList.add('active');
    } else {
        dots_index[0].classList.add('active');
    }

}

btnnext.addEventListener('click', function () {
    contador3 = 1;
    Next();
});

function Prev() {
    let sliderSection = document.querySelectorAll('.slider_section_index');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider3.style.marginLeft = '0'; // da un margin de 0
    slider3.style.transition = 'all 1s'; //medio segundo es igual a 500 y un segundo 1000
    setTimeout(function () {
        slider3.style.transition = 'none';
        slider3.insertAdjacentElement('afterbegin', sliderSectionLast); //Vuelve a poner la imagen de primera
        slider3.style.marginLeft = '-100%'; //Regresa el valor a -100
    }, 1000); //medio segundo es igual a 500 y un segundo 1000

    // Mover la clase 'active' al elemento li anterior
    let activeDot = document.querySelector('.contenedor_slider_index .dots li.active');
    activeDot.classList.remove('active');
    if (activeDot.previousElementSibling) {
        activeDot.previousElementSibling.classList.add('active');
    } else {
        dots_index[dots_index.length - 1].classList.add('active');
    }
}

btnprev.addEventListener('click', function () {
    contador3 = 1;
    Prev();
});


setInterval(function () { //Para que se inicie
    if (contador3 == '0') {
        Next();
    }
}, 4000); //1000 es un segundo

