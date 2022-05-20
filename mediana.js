
function calcularpromedio(lista){
    const sumalista = lista.reduce(
        function (valoracumulado=0,nuevoelemento){
        return valoracumulado + nuevoelemento;
        }     
    );
    const promediolista= sumalista/lista.length

    return promediolista;
}

var lista = [3,4,5,6,7,8];

let mtadlista= parseInt(lista.length/2);

function espar(numerito){
    if(numerito % 2 === 0 ){
        return true;
    }else{
        return false;
    }

}


let mediana;

if(espar(lista.length)){
    const elemnto1 = lista[mtadlista-1];
    const elemnto2 = lista[mtadlista];
    const promedio1 = calcularpromedio([elemnto1,elemnto2]);
    mediana = promedio1     

}else{
    mediana=lista[mtadlista]
}