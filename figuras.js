//cuadrado
console.group("Cuadrados")

function perimetroCuadrado (lado){
    return lado*4;
}

function areaCuadrado (lado){
    return lado * lado;
} 
console.groupEnd();

//triangulo
console.group("Triangulo")

    function perimetroTriangulo(lado1, lado2, base) {
        return lado1 + lado2 + base;
    }
    
    function areaTriangulo (base, altura){
        return (base * altura)/2;
    }
    
    console.groupEnd();

    //circulo
    console.group("Circulo");

    function diametroCirculo (radio){
        return radio * 2;
    }
   
    const PI = Math.PI;
    console.log("El valor de PI es: " + PI);

    function perimetroCirculo(){
        return diametroCirculo(radio) * PI;
    }
    
    function areaCirculo (radio){
        return (radio * radio) * PI
    }
   
    console.groupEnd();

    //interactuando con el HTML
    function calcularPerimetroCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const perimetro = perimetroCuadrado(value);
        alert(perimetro);
    }
    
    function calcularAreaCuadrado(){
        const input = document.getElementById("InputCuadrado");
        const value = input.value;

        const area = areaCuadrado(value);
        alert(area);
    }