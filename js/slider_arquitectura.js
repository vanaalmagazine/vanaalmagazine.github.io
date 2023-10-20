  // Constantes
  const slider = document.querySelector('#slider_arquitectura');
  let sliderSection = document.querySelectorAll('.slider_section_arquitectura');
  let dots = document.querySelectorAll('.contenedor_slider_arquitectura .dots_arquitectura li');
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  const btnprev = document.querySelector('#slider_btn_prev_arquitectura');
  const btnnext = document.querySelector('#slider_btn_next_arquitectura');
  
  let contador3 = 0;
  
  slider.insertAdjacentElement('afterbegin', sliderSectionLast);
  
  function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider_section_arquitectura')[0];
    slider.style.marginLeft = "-100%";
    slider.style.transition = "all 2s";
    setTimeout(function() {
      slider.style.transition = "none";
      slider.insertAdjacentElement('beforeend', sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 2000);
  
    // Mover la clase 'active' al siguiente elemento li
    let activeDot = document.querySelector('.contenedor_slider_arquitectura .dots_arquitectura li.active');
    activeDot.classList.remove('active');
    if (activeDot.nextElementSibling) {
      activeDot.nextElementSibling.classList.add('active');
    } else {
      dots[0].classList.add('active');
    }
  }
  
  btnnext.addEventListener('click', function() {
    contador3 = 1;
    Next();
  });
  
  function Prev() {
    let sliderSection = document.querySelectorAll('.slider_section_arquitectura');
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 2s';
    setTimeout(function() {
      slider.style.transition = 'none';
      slider.insertAdjacentElement('afterbegin', sliderSectionLast);
      slider.style.marginLeft = '-100%';
    }, 2000);
  
    // Mover la clase 'active' al elemento li anterior
    let activeDot = document.querySelector('.contenedor_slider_arquitectura .dots_arquitectura li.active');
    activeDot.classList.remove('active');
    if (activeDot.previousElementSibling) {
      activeDot.previousElementSibling.classList.add('active');
    } else {
      dots[dots.length - 1].classList.add('active');
    }
  }
  
  btnprev.addEventListener('click', function() {
    contador3 = 1;
    Prev();
  });
  
  setInterval(function() {
    if (contador3 == '0') {
      Next();
    }
  }, 4000);
  