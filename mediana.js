function calcularMediaAritmética(lista) {
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}


const lista1 = [
    200,
    500,
    100,
    400000000,
];

// Esto ordena la lista de mayor a menor
const numeros = lista1.sort(function(a, b){return a - b});

const mitadLista1 = parseInt(numeros.length / 2);

function esPar(numerito) {
    if (numerito % 2 === 0) {
        return true
    } else {
        return false;
    }
}

let mediana;

if (esPar(numeros.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    
    const promedioElemento1y2 = calcularMediaAritmética([
        elemento1,
        elemento2,
    ])

    mediana = promedioElemento1y2;
    
    // necesitamos dos elementos
    // -> el promedio
    // -> mediana
} else {
    mediana = lista1[mitadLista1];
}