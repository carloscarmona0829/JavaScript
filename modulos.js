import {
  contarCoincidencias,
  eliminarPatron,
  invertirTexto,
  palindromo,
} from "./clase35.js";
import {
  PI,
  contarCadena,
  contarCaracteres,
  recortarCadena,
  convertirEnArreglo,
  repetirCadena,
  cortarTexto,
  cadenaAArreglo,
  repetirTexto,
} from "./clase34.js";
import { aleatorio, capicua, factorial } from "./clase36.js";
import { convertirgrados, par, primo } from "./clase37.js";
import { Pelicula } from "./clase43.js";

//Ejercicios Clase 34
/*
console.log("Archivo modulos.js");
console.log(PI);
contarCadena("Hola Mundo");
contarCaracteres("Hola Mundo");
recortarCadena("Hola Mundo",4)
cortarTexto("hola mundo",4)
convertirEnArreglo("Hola que tal", " ");
cadenaAArreglo("Hola que tal", " ")
repetirCadena(" "+"Hola Mundo",3); 
repetirTexto("Hola Mundo",3);
repetirTexto("",3);
repetirTexto("Hola Mundo",);
repetirTexto();
*/

//Ejercicios Clase 35
/*
invertirTexto("");
invertirTexto("Hola Mundo");
contarCoincidencias();
contarCoincidencias("hola mundo hola hola", "hola");
palindromo();
palindromo("kawak");
palindromo("KAwak1");
eliminarPatron();
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
*/

//Ejercicios Clase 36
/*
aleatorio();
capicua("asdf");
capicua(7007);
factorial();
factorial("asdf");
factorial(-4);
factorial(4);
*/

//Ejercicios Clase 37
/*
primo();
primo(13);
par();
par(7);
convertirgrados();
convertirgrados(100);
convertirgrados(0, "C");
convertirgrados(100, "C");
convertirgrados(100, "F");
*/

//Ejercicios Clase 38,39,40,41,42 ya había resuelto algo parecido entonces no los hice

//Ejercicios Clase 43
/*
const peli = new Pelicula({
  id:"tt1234567",
  titulo:"Advengers End Game",
  director:"Anthony y Joe Russo",
  estreno:2019,
  pais:["Usa","México"],
  generos:["Action","Adult"],
  calificacion:7.7
});
peli.fichaTecnica();
*/

//Ultimo punto del ejercicio
const misPelisFavoritas = [
  {
    id:"tt1234567",
    titulo:"Advengers End Game",
    director:"Anthony y Joe Russo",
    estreno:2019,
    pais:["Usa","México"],
    generos:["Action","Adult"],
    calificacion:7.7
  },
  {
    id:"tt8901234",
    titulo:"Guerra Mundial Z",
    director:"No se",
    estreno:2015,
    pais:["Usa","México"],
    generos:["Action","Adult"],
    calificacion:7.7
  },
  {
    id:"tt5678901",
    titulo:"Advengers End Game",
    director:"Anthony y Joe Russo",
    estreno:2019,
    pais:["Usa","México"],
    generos:["Action","Adult"],
    calificacion:7.7
  }
];
misPelisFavoritas.forEach(el => new Pelicula(el).fichaTecnica());

