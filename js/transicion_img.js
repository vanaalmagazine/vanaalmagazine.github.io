var imagenes_transicion = document.querySelectorAll(".slider_img"),
total = imagenes_transicion.length,
contador = 0,
slider = function(){
    imagenes_transicion[contador].style.opacity = 0;
    contador = contador == total - 1 ? 0 : ++contador;
    imagenes_transicion[contador].style.opacity = 1;
};

imagenes_transicion[contador].style.opacity = 1;
setInterval(slider, 3500); 


