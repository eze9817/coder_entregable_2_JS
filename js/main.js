alert("simulador de promedio de notas")

console.log("hola bienvenido");
const nombre = prompt("Ingrese su nombre")
const cantidadMaterias = 3;

let nota = 0;
let sumaNotas = 0;

for (let i = 1; i <= cantidadMaterias; i++) {

    if (i === 1) {
        do {
            nota = Number(prompt("nota de matematica"));

            if (nota < 0 || nota > 100) {
                alert("La nota ingresada no es válida");
            }

        } while (nota < 0 || nota > 100);
    } else if (i === 2) {
        do {
            nota = Number(prompt("nota de literatura"));

            if (nota < 0 || nota > 100) {
                alert("La nota ingresada no es válida");
            }

        } while (nota < 0 || nota > 100);
    } else {
        do {
            nota = Number(prompt("nota de ciencias"));

            if (nota < 0 || nota > 100) {
                alert("La nota ingresada no es válida");
            }

        } while (nota < 0 || nota > 100);
    }
    sumaNotas = sumaNotas + nota
}

const promedio = sumaNotas / cantidadMaterias

if (promedio >= 85) {
    alert("hola " + nombre + " tu promedio es: " + promedio + " estas aprobado, excelente")
} else if (promedio >= 60) {
    alert("hola " + nombre + " tu promedio es: " + promedio + " estas aprobado")
} else {
    alert("hola " + nombre + " tu promedio es: " + promedio + " estas desaprobado")
}