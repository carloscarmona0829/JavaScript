import scrollTopButton from "./boton-scroll.js";
import contdown from "./cuenta_regresiva.js";
import hamburguerMenu from "./menu-_hamburguesa.js";
import responsiveMedia from "./objeto_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    contdown("contdown", "Nov 21, 2022 01:00:00","Feliz Cumpleaños Carlos Carmona 😃");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube", "(min-width: 1024px)", `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91&ab_channel=jonmircha">Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia("gmaps", "(min-width: 1024px)", `<a href="https://goo.gl/maps/nAGFniGavBft8jD9A">Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1881.3307860567413!2d-99.16869637419533!3d19.42702312620723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd1563%3A0x6c366f0e2de02ff7!2sThe%20Angel%20of%20Independence!5e0!3m2!1sen!2sco!4v1656264418318!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
});

d.addEventListener("keydown", (e)=>{    
    shortcuts(e);
    moveBall(e,".ball",".stage");
});

//Se deja este método por fuera de los demás para usarlo en otro DOMContentLoaded
darkTheme(".dark-theme-btn", "dark-mode")