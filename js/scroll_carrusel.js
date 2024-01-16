/*Abrir ver más**/
function toggleLista() {
    var listaPaquetes = document.getElementById('lista-paquetes');
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

/*Scroll en el carrusel */
document.addEventListener('DOMContentLoaded', function() {
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

