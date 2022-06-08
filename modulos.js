import { contarCoincidencias, eliminarPatron, invertirTexto, palindromo } from "./clase35.js";
import { PI, contarCadena, contarCaracteres, recortarCadena, convertirEnArreglo, repetirCadena, cortarTexto, cadenaAArreglo, repetirTexto } from "./clase34.js";

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
invertirTexto("");
invertirTexto("Hola Mundo");
contarCoincidencias();
contarCoincidencias("hola mundo hola hola", "hola");
palindromo();
palindromo("kawak");
palindromo("KAwak1");
eliminarPatron();
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");