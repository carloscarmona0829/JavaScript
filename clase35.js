// 5) Programa una función que invierta las palabras de una cadena de texto, 
//pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
export const invertirTexto = (texto = "") =>
    (!texto)
        ? console.warn("No ingresaste ningun texto")
        : console.info(texto.split("").reverse().join(""));

// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
export const contarCoincidencias = (texto = "", repite = "") => {
    if (!texto) return console.warn("No ingresaste ningun texto");

    if (!repite) return console.warn("No ingresaste ninguna palabra a buscar");

    let i = 0, contador = 0;

    while (i !== -1) {
        i = texto.indexOf(repite, i);
        if (i !== -1) {
            i++
            contador++;
        }
    }
    return console.info(`La palabra ${repite} se repite ${contador} veces`)
}
    

// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
//(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
export const palindromo = (texto = "") => {
    if (!texto) return console.warn("Texto no ingresado");

    let textoLow = texto.toLowerCase();
    let reves = texto.split("").reverse().join("");

    return (textoLow === reves)
        ? console.log(`La palabra ${texto} SI es palíndrome`)
        : console.log(`La palabra ${texto} NO es palíndrome`)
}


// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
export const eliminarPatron = (texto="", patron="")=>{
    (!texto || !patron) 
    ? console.warn("Texto o patron no ingresados")
    : console.log(texto.replaceAll(patron,""))
}