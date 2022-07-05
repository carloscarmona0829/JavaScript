// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
export const aleatorio = () =>
    console.log(Math.floor(Math.random() * (601 - 501)) + 501);

// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro),
//     pe. miFuncion(2002) devolverá true.
export const capicua = (numero = undefined) => {
    if (typeof numero !== "number") return console.log("Debe ingresar un valor numérico");

    numero = numero.toString();
    let reves = numero.split("").reverse().join("");
    (numero === reves)
        ? console.log(`El número ${numero} SI es capícua`)
        : console.log(`El número ${numero} NO es capícua`)

}

// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
//     se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
export const factorial = (numero = undefined) => {
    if (typeof numero !== "number") return console.log("Debe ingresar un valor numérico");

    if (numero === 0) return console.log(1)

    if (Math.sign(numero) === -1) return console.log("El número no puede ser negativo")

    let total = 1;
    for (let i = 1; i <= numero; i++) {
        total = total * i;
    }
    console.log(total);
}
