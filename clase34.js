
export const PI = Math.PI;

// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
export function contarCadena(cadena){
    console.log("La cadena " + "'" + cadena + "'" + " tiene " + cadena.length + " caracteres");
}

/*El mismo ejercicio solucionado por #JonMircha con funciones expresadas,
arrow functions y operadores ternarios en una sola linea de código */
export const contarCaracteres = (cadena = "") =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena")
        : console.info(`La cadena ${cadena} 
        tiene ${cadena.length} caracteres`);

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
export function recortarCadena(cadena,numero){
    console.log(cadena.substring(0,numero));
}

/*El mismo ejercicio solucionado por #JonMircha con funciones expresadas,
arrow functions y operadores ternarios en una sola linea de código */
export const cortarTexto = (cadena = "", longitud=undefined) =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena")
        : (longitud === undefined)
        ? console.warn("No ingresaste ninguna longitud")
        : console.info(cadena.slice(0, longitud));

// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
export function convertirEnArreglo(cadena){
    let arreglo = cadena.split(" ");
    console.log(arreglo);
}

/*El mismo ejercicio solucionado con funciones expresadas,
arrow functions y operadores ternarios en una sola linea de código */
export const cadenaAArreglo = (cadena = "") =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena")
        : console.info(cadena.split(" "))

// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
export function repetirCadena(cadena, cantidad) {
    console.log(cadena.repeat(cantidad));
    // for (let i=0; i<cantidad; i++){
    //     console.log(cadena);
    // }
}

/*El mismo ejercicio solucionado con funciones expresadas,
arrow functions y operadores ternarios en una sola linea de código */
export const repetirTexto = (cadena = "", cantidad = undefined) =>
    (!cadena)
        ? console.warn("No ingresaste ninguna cadena")
        : (cantidad === undefined)
            ? console.warn("No ingresaste ninguna cantidad")
            : (Math.sign(cantidad) === -1)
                ? console.warn("La cantidad no puede ser negativa") 
                : console.info(cadena.repeat(cantidad));
