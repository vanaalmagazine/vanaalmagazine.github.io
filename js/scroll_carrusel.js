/*Abrir ver más lista paquetes**/
function toggleBeneficios() {
  var listaPaquetes = document.getElementById('lista-beneficios');
  var alturaActual = listaPaquetes.offsetHeight; // Altura actual, incluyendo la transición

  // Establecer temporalmente la altura a 'auto' para obtener la altura completa
  listaPaquetes.style.maxHeight = 'none';
  var alturaCompleta = listaPaquetes.offsetHeight;

  // Restaurar la altura a su valor original
  listaPaquetes.style.maxHeight = alturaActual + 'px';

  // Esperar un breve momento antes de alternar entre mostrar y ocultar
  setTimeout(function () {
    listaPaquetes.style.maxHeight = alturaActual === 0 ? alturaCompleta + 'px' : '0';
  }, 10);
}

/*Ver más cards*/
function toggleLista(verMas) {
  var tarjeta = verMas.closest('.caracteristicas');
  var listaPaquetes = tarjeta.querySelector('.lista_caract');
  var verMasTexto = tarjeta.querySelector('.ver-mas');

  if (listaPaquetes.style.maxHeight) {
    listaPaquetes.style.maxHeight = null;
    verMasTexto.innerHTML = 'Ver más';
  } else {
    listaPaquetes.style.maxHeight = listaPaquetes.scrollHeight + 'px';
    verMasTexto.innerHTML = 'Ver menos';
  }
}

/*Scroll en el carrusel */
document.addEventListener('DOMContentLoaded', function () {
  const carruselContainer = document.querySelector('.cont_carrusel_scroll');
  let isDragging = false;
  let startX;
  let scrollLeft;

  carruselContainer.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - carruselContainer.offsetLeft;
    scrollLeft = carruselContainer.scrollLeft;
    carruselContainer.style.cursor = 'grabbing';
  });

  carruselContainer.addEventListener('mouseup', () => {
    isDragging = false;
    carruselContainer.style.cursor = 'grab';
  });

  carruselContainer.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      carruselContainer.style.cursor = 'grab';
    }
  });

  carruselContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.pageX - carruselContainer.offsetLeft;
    const walk = (x - startX) * 3; // Ajusta el multiplicador según tu preferencia
    carruselContainer.scrollLeft = scrollLeft - walk;
  });
});


/*Ajustar card número 2 en el scroll*/
document.addEventListener('DOMContentLoaded', function () {
  // Verificar si la ventana es menor que 1100px
  if (window.innerWidth < 1100) {
    // Obtener el contenedor del carrusel
    const carruselContainer = document.querySelector('.cont_carrusel_scroll');
    // Obtener la card objetivo (en este caso, la segunda card)
    const cardObjetivo = document.querySelector('.cont_carrusel_scroll_1 .card_carrusel:nth-child(2)');

    // Calcular la posición de la card objetivo en relación con el contenedor
    const offsetLeft = cardObjetivo.offsetLeft;

    // Ajustar el scroll para que la card objetivo esté en el centro de la pantalla
    carruselContainer.scrollLeft = offsetLeft - (carruselContainer.clientWidth - cardObjetivo.clientWidth) / 2;

    // Restaurar el código de scroll original
    let isDragging = false;
    let startX;
    let scrollLeft;

    carruselContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - carruselContainer.offsetLeft;
      scrollLeft = carruselContainer.scrollLeft;
      carruselContainer.style.cursor = 'grabbing';
    });

    carruselContainer.addEventListener('mouseup', () => {
      isDragging = false;
      carruselContainer.style.cursor = 'grab';
    });

    carruselContainer.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        carruselContainer.style.cursor = 'grab';
      }
    });

    carruselContainer.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const x = e.pageX - carruselContainer.offsetLeft;
      const walk = (x - startX) * 3; // Ajusta el multiplicador según tu preferencia
      carruselContainer.scrollLeft = scrollLeft - walk;
    });
  }
});

/*Aparecer y desaparecer flecha Prev y Next*/
document.addEventListener('DOMContentLoaded', function () {
  const carruselContainer = document.querySelector('.cont_carrusel_scroll');
  const buttonPrev = document.querySelector('.button-prev1');
  const buttonNext = document.querySelector('.button-next1');
  const carruselHeight = carruselContainer.clientHeight;

  if (window.innerWidth < 1100) {
    carruselContainer.addEventListener('scroll', function () {
      const scrollPosition = carruselContainer.scrollLeft;
      const startThreshold = carruselHeight * 0.5;
      const endThreshold = carruselContainer.scrollWidth - carruselHeight * 0.9;

      if (scrollPosition <= startThreshold) {
        buttonPrev.style.opacity = '0';
      } else {
        buttonPrev.style.opacity = '1';
      }

      if (scrollPosition >= endThreshold) {
        buttonNext.style.opacity = '0';
      } else {
        buttonNext.style.opacity = '1';
      }
    });

    let isDragging = false;
    let startX;
    let scrollLeft;

    carruselContainer.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - carruselContainer.offsetLeft;
      scrollLeft = carruselContainer.scrollLeft;
      carruselContainer.style.cursor = 'grabbing';
    });

    carruselContainer.addEventListener('mouseup', () => {
      isDragging = false;
      carruselContainer.style.cursor = 'grab';
    });

    carruselContainer.addEventListener('mouseleave', () => {
      if (isDragging) {
        isDragging = false;
        carruselContainer.style.cursor = 'grab';
      }
    });

    carruselContainer.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const x = e.pageX - carruselContainer.offsetLeft;
      const walk = (x - startX) * 3;
      carruselContainer.scrollLeft = scrollLeft - walk;
    });
  }
});







