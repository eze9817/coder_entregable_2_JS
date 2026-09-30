alert("simulador de promedio de notas")

console.log("hola bienvenido");
const nombre = prompt("Ingrese su nombre")
const cantidad_materias = 3;

let nota = 0;
let sumanotas = 0;

for(let i = 1; i <= cantidad_materias; i++) {

    if (i === 1) {
        nota = Number(prompt("nota de matematica"));
    }else if (i === 2) {
        nota = Number(prompt("nota de literatura"));   
    }else {
        nota = Number(prompt("nota de ciencias"))
    }
    sumanotas = sumanotas + nota
}

const promedio = sumanotas / cantidad_materias

if (promedio >= 85) {
    alert("hola " + nombre + " tu promedio es: " + promedio + " estas aprobado, excelente")
} else if (promedio >= 60) {
    alert("hola " + nombre + " tu promedio es: " + promedio + " estas aprobado")
} else {
    alert("hola " + nombre + " tu promedio es: " + promedio + " estas desaprobado")
}