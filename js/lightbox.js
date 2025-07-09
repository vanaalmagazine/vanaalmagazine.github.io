/*Variables*/
const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('.cont_carrusel_scroll img');
const lightbox = document.querySelector('#lightbox');
const imagenActiva = document.querySelector('#img-activa');
let dots1 = document.querySelectorAll('#lightbox .dots li');
//////

/////
let indiceImagen = 0;

/*Abre el Lightbox*/

const abreLightbox = (event) => {

  // Restablece la clase "active" en todos los puntos
  dots1.forEach(dot => dot.classList.remove('active'));

  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
  document.body.classList.toggle('noscroll2');

  // Encuentra el punto correspondiente y agrega la clase "active"
  dots1[indiceImagen].classList.add('active');

  document.querySelectorAll(".cont_carrusel_scroll").forEach(el => {
    el.addEventListener("click", e => {
      const id = e.target.getAttribute("id");

      btnRetrocede.style.display = 'block';
      btnAdelanta.style.display = 'block';

      if (indiceImagen == imagenes.length - 1) {
        btnAdelanta.style.display = 'none';
      }

    });
  });

};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});

/*Cierra el Lightbox */

btnCierra.addEventListener('click', () => {
  document.body.classList.remove('noscroll2');
  lightbox.style.display = 'none';
});

window.addEventListener('keyup', function (e) {
  if (e.keyCode == 27) {
    document.body.classList.remove('noscroll2');
    lightbox.style.display = 'none';
  }
});

imagenActiva.addEventListener('click', () => {
  document.body.classList.remove('noscroll2');
  lightbox.style.display = 'none';
});

/* Adelanta la imagen*/

const adelantaImagen = () => {
  if (indiceImagen == imagenes.length - 2) {
    // indiceImagen = -1;
    btnAdelanta.style.display = 'none';
  }
  if (indiceImagen < imagenes.length) {
    btnRetrocede.style.display = 'block';
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;

  // Mover la clase 'active' al siguiente elemento li
  let activeDot = document.querySelector('#lightbox .dots li.active');
  activeDot.classList.remove('active');
  if (activeDot.nextElementSibling) {
    activeDot.nextElementSibling.classList.add('active');
  } else {
    dots1[0].classList.add('active');
  }

};

btnAdelanta.addEventListener('click', adelantaImagen);

window.addEventListener('keyup', function (e) {
  if (e.keyCode == 39) {
    if (indiceImagen == imagenes.length - 2) {
      // indiceImagen = -1;
      btnAdelanta.style.display = 'none';
    }
    if (indiceImagen < imagenes.length) {
      btnRetrocede.style.display = 'block';
    }

    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;

    // Mover la clase 'active' al siguiente elemento li
    let activeDot = document.querySelector('#lightbox .dots li.active');
    activeDot.classList.remove('active');
    if (activeDot.nextElementSibling) {
      activeDot.nextElementSibling.classList.add('active');
    } else {
      dots1[0].classList.add('active');
    }

  }
});


document.addEventListener('swiped-left', function (e) {
  console.log(e.target); // the element that was swiped
  if (indiceImagen == imagenes.length - 2) {
    // indiceImagen = -1;
    btnAdelanta.style.display = 'none';
  }
  if (indiceImagen < imagenes.length) {
    btnRetrocede.style.display = 'block';
  }

  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;

  // Mover la clase 'active' al siguiente elemento li
  let activeDot = document.querySelector('#lightbox .dots li.active');
  activeDot.classList.remove('active');
  if (activeDot.nextElementSibling) {
    activeDot.nextElementSibling.classList.add('active');
  } else {
    dots1[0].classList.add('active');
  }

});

/*Retrocede la Imagen*/

const retrocederImagen = () => {
  if (indiceImagen === 1) {
    //indiceImagen = imagenes.length;
    btnRetrocede.style.display = 'none';
  }
  if (indiceImagen < imagenes.length) {
    btnAdelanta.style.display = 'block';
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;

  // Mover la clase 'active' al elemento li anterior
  let activeDot = document.querySelector('#lightbox .dots li.active');
  activeDot.classList.remove('active');
  if (activeDot.previousElementSibling) {
    activeDot.previousElementSibling.classList.add('active');
  } else {
    dots1[dots1.length - 1].classList.add('active');
  }
};

btnRetrocede.addEventListener('click', retrocederImagen);

window.addEventListener('keyup', function (e) {
  if (e.keyCode == 37) {
    if (indiceImagen === 1) {
      //indiceImagen = imagenes.length;
      btnRetrocede.style.display = 'none';
    }
    if (indiceImagen < imagenes.length) {
      btnAdelanta.style.display = 'block';
    }
    imagenActiva.src = imagenes[indiceImagen - 1].src;
    indiceImagen--;

    // Mover la clase 'active' al elemento li anterior
    let activeDot = document.querySelector('#lightbox .dots li.active');
    activeDot.classList.remove('active');
    if (activeDot.previousElementSibling) {
      activeDot.previousElementSibling.classList.add('active');
    } else {
      dots1[dots1.length - 1].classList.add('active');
    }
  }
});

document.addEventListener('swiped-right', function (e) {
  console.log(e.target); // the element that was swiped
  if (indiceImagen === 1) {
    //indiceImagen = imagenes.length;
    btnRetrocede.style.display = 'none';
  }
  if (indiceImagen < imagenes.length) {
    btnAdelanta.style.display = 'block';
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;

  // Mover la clase 'active' al elemento li anterior
  let activeDot = document.querySelector('#lightbox .dots li.active');
  activeDot.classList.remove('active');
  if (activeDot.previousElementSibling) {
    activeDot.previousElementSibling.classList.add('active');
  } else {
    dots1[dots1.length - 1].classList.add('active');
  }
});