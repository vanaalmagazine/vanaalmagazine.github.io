/*Header scroll */
window.addEventListener("scroll", function () {
   var header = document.querySelector("header");
   header.classList.toggle("headerscroll", window.scrollY > 0);
});

/*Botón menú X*/
let boton = document.getElementById("contenedormenu");
const email = document.querySelector(".item-right");

function myFunction(x) {
   boton.classList.toggle("change-contenedormenu");
   x.classList.toggle("change");
   email.classList.toggle("ocultar");
}

/*No Scroll al abrir menú*/
let noscroll = document.getElementById('contenedormenu');
noscroll.addEventListener('click', ()=>{

   document.body.classList.toggle('noscroll'); 
});

/*Conastantes*/
const menu = document.querySelector(".menu");
const menuMain = menu.querySelector(".menu-main");
const goBack = menu.querySelector(".go-back");
const close = document.querySelector(".mobile-menu-trigger");
const logotipo = document.querySelector(".item-left");

/*Abrir submenu*/
let subMenu;
menuMain.addEventListener("click", (e) => {
   if (!menu.classList.contains("active")) {
      return;
   }
   if (e.target.closest(".menu-item-has-children")) {
      const hasChildren = e.target.closest(".menu-item-has-children");
      showSubMenu(hasChildren);
   }
});

/*Botón de volver*/
goBack.addEventListener("click", () => {
   hideSubMenu();
})
/*Botón menú*/
close.addEventListener("click", () => {
   toggleMenu();
   hideSubMenu();
   if (!logotipo.classList.contains("ocultar")) {
      return;
   } else {
      logotipo.classList.toggle("ocultar");
   }
})

/*Toggle clase Active */
function toggleMenu() {
   menu.classList.toggle("active");
}

/*Mostar submenú */
function showSubMenu(hasChildren) {
   subMenu = hasChildren.querySelector(".sub-menu");
   subMenu.classList.add("active");
   subMenu.style.animation = "slideLeft 0.5s ease forwards";
   const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
   menu.querySelector(".current-menu-title").innerHTML = menuTitle;
   menu.querySelector(".mobile-menu-head").classList.add("active");
   if (logotipo.classList.contains("ocultar")) {
      return;
   } else {
      logotipo.classList.toggle("ocultar");
   }
}

/*Ocultar Submenú */
function hideSubMenu() {
   subMenu.style.animation = "slideRight 0.5s ease forwards";
   setTimeout(() => {
      subMenu.classList.remove("active");
   }, 300);
   menu.querySelector(".current-menu-title").innerHTML = "";
   menu.querySelector(".mobile-menu-head").classList.remove("active");
   logotipo.classList.toggle("ocultar");
}

window.onresize = function () {
   if (this.innerWidth > 991) {
      if (menu.classList.contains("active")) {
         toggleMenu();
      }

   }
}


/*Que las etiquetas a con "#" no se devuelvan al incio*/
document.getElementById("miEnlace").addEventListener("click", function(event) {
   event.preventDefault();
 });
