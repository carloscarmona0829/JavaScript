// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
//pe. miFuncion(7) devolverá true.
export const primo = (numero) => {
    if (typeof numero !== "number") return console.log("Debe ingresar un valor numérico");

    let divisible = false;
    for (let i = 2; i < numero; i++) {
        if ((numero % i) === 0) {
            divisible = true;
            break;
        }
    }
    return (divisible)
        ? console.log(`El numero ${numero} NO es primo`)
        : console.log(`El numero ${numero} SI es primo`)
}

// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
export const par = (numero) => {
    if (typeof numero !== "number") return console.log("Debe ingresar un valor numérico");

    (numero % 2) === 0
        ? console.log(`El numero ${numero} SI es par`)
        : console.log(`El numero ${numero} No es par`)
}

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
export const convertirgrados = (temperatura = undefined, tipo = "") => {
    if (typeof temperatura !== "number") return console.log("Debe ingresar un valor numérico");

    let celsius = ((temperatura * 0.5556) - 32);
    let fahrenheits = (temperatura * 1.8) + 32;

    if (tipo === "C") {
        return console.log(`${temperatura} celsios equivalen a ${fahrenheits} Fahrenheits`);
    } else if (tipo === "F") {
        return console.log(`${temperatura} fahrenheits equivalen a ${celsius} celsius`);
    } else {
        return console.log("Solo se adminte el valor 'C' o 'F'");
    }
}
