var ladoA = document.getElementById("lado A");
var A =ladoA.value;
var ladoB = document.getElementById("lado B");
var B =ladoB.value;
var ladoC = document.getElementById("lado C");
var C =ladoC.value;


function esisosceles(){
    if( A==B || C==A || C==B ){
        alert("es isosceles")
    }else {alert("un triangulo isosceles tiene dos lados iguales")}
}