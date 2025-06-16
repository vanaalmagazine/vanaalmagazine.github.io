//Quitar flecha al  scrollear y degradado
window.addEventListener("scroll", function () {
    var flecha = document.querySelector(".indicador_bottom_arrow");
  
    flecha.classList.toggle("arrowscroll", window.scrollY > 30);
  
  
    if (screen.height < 1131) {
        var degradadofijo = document.querySelector(".degradado_backfijo");
        degradadofijo.classList.toggle("degradadofijo", window.scrollY > 1700);
    }
  
  });
  
  /*Variables*/
  let slideImages = document.querySelectorAll('.slider img');
  let next = document.querySelector('.buttons .next');
  let prev = document.querySelector('.buttons .prev');
  let dots = document.querySelectorAll('.dots_slider .dot');
  
  var counter = 0;
  
  /*Botón next*/
  next.addEventListener('click', slideNext);
  function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length-1){
      counter = 0;
    }else{
      counter++;
    }
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
  }
  
  /*Botón prev*/
  prev.addEventListener('click', slidePrev);
  function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
      counter = slideImages.length-1;
    }else{
      counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
  }
  
  /*Auto Slideing*/
  function autoSliding(){
    deletInterval = setInterval(timer, 3500);
    function timer(){
      slideNext();
      indicators();
    }
  }
  
  autoSliding();
  
  //Parar el auto Sliding cuando el mouse esta encima
  /*const container = document.querySelector('.slider-container');
  container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
  })*/
  
  //Inciar el auto Sliding cuando el mouse esta encima
  //container.addEventListener('mouseout', autoSliding);
  
  //Agregar y remover la clase active de los dots
  function indicators(){
    for(i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
  }
  
  //Agregar evento click a los dots
  function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if(imageId > counter){
      slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
      counter = imageId;
      slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter){
        return;
    }
    else{
      slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
      counter = imageId;
      slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    clearInterval(deletInterval);
    indicators();
  }
