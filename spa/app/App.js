import { Loader } from "./components/Loader.js";
import { Title } from "./components/PostCard.js";
import { ajax } from "./helpers/ajax.js";


export function App(){
    const d = document,
    $root =  d.getElementById("root");

    $root.appendChild(Title());
    $root.appendChild(Loader());

    
}

