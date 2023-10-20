//Constantes
const slidernew = document.querySelector('#slider_newworks');
let sliderSectionnew = document.querySelectorAll('.slider_section_neworks');
let sliderSectionLastnew = sliderSectionnew[sliderSectionnew.length -1];
const btnprevnew = document.querySelector('#slider_newwork_btn_prev_index');
const btnnextnew = document.querySelector('#slider_newwork_btn_next_index');

let contadornew = 0

slidernew.insertAdjacentElement('afterbegin', sliderSectionLastnew); //Inserta la ultima foto de primeras

function Next1(){
    let sliderSectionFirstnew = document.querySelectorAll('.slider_section_neworks')[0]; //Va tomar la primera foto
    slidernew.style.marginLeft = "-200%"; // da un margin de -200
    slidernew.style.transition = "all 1s"; //medio segundo es igual a 500 y un segundo 1000
    setTimeout(function() {
        slidernew.style.transition = "none";
        slidernew.insertAdjacentElement('beforeend', sliderSectionFirstnew); //Vuelve a poner la imagen de ultimas
        slidernew.style.marginLeft = "-100%"; //Regresa el valor a -100
    }, 1000); //medio segundo es igual a 500 y un segundo 1000
    
}

btnnextnew.addEventListener('click', function(){
    contadornew = 1;
    Next1();
});

function Prev1(){
    let sliderSectionnew = document.querySelectorAll('.slider_section_neworks');
    let sliderSectionLastnew = sliderSectionnew[sliderSectionnew.length -1];
    slidernew.style.marginLeft = '0'; // da un margin de 0
    slidernew.style.transition = 'all 1s'; //medio segundo es igual a 500 y un segundo 1000
    setTimeout(function() {
        slidernew.style.transition = 'none';
        slidernew.insertAdjacentElement('afterbegin', sliderSectionLastnew); //Vuelve a poner la imagen de primera
        slidernew.style.marginLeft = '-100%'; //Regresa el valor a -100
    }, 1000); //medio segundo es igual a 500 y un segundo 1000
}

btnprevnew.addEventListener('click', function(){
    contadornew = 1;
    Prev1();
});


