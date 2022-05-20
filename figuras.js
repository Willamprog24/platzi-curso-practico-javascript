console.log("hello wordl");

// interactuando con javascript

function CalcularPerimetroCuadrado(){
    const lado =document.getElementById("inputcuadrado")
    const inputlado =lado.value;

    const perimetro = inputlado * 4;
    alert(perimetro)
}

function CalcularAreCuadrado(){
    const lado =document.getElementById("inputcuadrado")
    const inputlado =lado.value;
    const area = inputlado*inputlado;

    alert(area);
}