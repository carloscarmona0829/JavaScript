import scrollTopButton from "./boton-scroll.js";
import contdown from "./cuenta_regresiva.js";
import hamburguerMenu from "./menu-_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall, shortcuts } from "./teclado.js";
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    contdown("contdown", "Nov 21, 2022 01:00:00","Feliz Cumpleaños Carlos Carmona 😃");
    scrollTopButton(".scroll-top-btn")
    darkTheme(".dark-theme-btn", "dark-mode")
});

d.addEventListener("keydown", (e)=>{    
    shortcuts(e);
    moveBall(e,".ball",".stage");
});
