import { Loader } from "./components/Loader.js";
import { Header } from "./components/header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

export function App() {
    const $root = document.getElementById("root");

    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());

    Router();//Se invoca de esta manera porque es una funcionalidad que no va directamente renderizada en el DOM sino que es mas bien un elemento de lógica de programación.
}

