import { Loader } from "./components/Loader.js";
import { Header } from "./components/header.js";

export function App(){
    const d = document,
    $root =  d.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(Loader());
    
}

