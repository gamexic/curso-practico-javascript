// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
    const result = Number(lado1) + Number(lado2) + Number(base);
    return Number(result)
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio ** 2) * PI;
}

console.groupEnd();

// Altura Triángulo Isósceles

console.group("Altura Triángulo Isósceles")

function AlturaTrianguloIsosceles(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base) {
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        return(altura)
    }
    else {
        alert('No es un triángulo Isósceles')
    }
}

console.groupEnd();


// Aquí interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  document.getElementById("resultado-cuadrado").innerText = (perimetro + "cm")
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  document.getElementById("resultado-cuadrado").innerText = (area + "cm^2")
}

// Triángulo
function calcularPerimetroTriangulo() {
    const ladox = document.getElementById("lado1-triangulo");
    const ladoy = document.getElementById("lado2-triangulo");
    const ladoz = document.getElementById("base-triangulo");

    const ladoa = ladox.value;
    const ladob = ladoy.value;
    const ladoc = ladoz.value;
    const perimetro = Number(perimetroTriangulo(ladoa, ladob, ladoc))
    document.getElementById("resultado-triangulo").innerText = (perimetro + "cm")
}

function calcularAreaTriangulo() {
    const alturaa = document.getElementById("altura-triangulo")
    const altura = alturaa.value;
    const ladoz = document.getElementById("base-triangulo");
    const base = ladoz.value;

    const area = areaTriangulo(base, altura);
    document.getElementById("resultado-triangulo").innerText = (area + "cm^2")
}

// Círculo
function calcularPerimetroCirculo() {
    const input = document.getElementById("radio-circulo");
    const radio = input.value;
    const diametro = diametroCirculo(radio);
    const perimetro = diametro*PI;
    document.getElementById("resultado-circulo").innerText = (perimetro + "cm")
}

function calcularDiametroCirculo() {
   const input = document.getElementById("radio-circulo");
   const radio = input.value;

   const diametro = diametroCirculo(radio);
   document.getElementById("resultado-circulo").innerText = (diametro + "cm")
}

function calcularAreaCirculo() {
    const input = document.getElementById("radio-circulo");
    const radio = input.value;

    const area = areaCirculo(radio);
    document.getElementById("resultado-circulo").innerText = (area + "cm^2")
}

// Altura del Triángulo Isósceles

function calcularAlturaTrianguloIsosceles() {
    const x = document.getElementById("lado1-triangulo-isosceles");
    const y = document.getElementById("lado2-triangulo-isosceles");
    const z = document.getElementById("base-triangulo-isosceles");

    const lado1 = x.value;
    const lado2 = y.value;
    const base = z.value;

    const altura = AlturaTrianguloIsosceles(lado1, lado2, base);
    document.getElementById("resultado-triangulo-isosceles").innerText = (altura + "cm")
}