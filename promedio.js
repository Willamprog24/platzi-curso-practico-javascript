function calcularpromedio(lista){
    // let sumalista=0;

// for (let i=0;i<lista.length;i++){
//      sumalista += + lista[i]     
// }

const sumalista = lista.reduce(
    function (valoracumulado=0,nuevoelemento){
       return valoracumulado + nuevoelemento;
    }   
);

const promediolista= sumalista/lista.length

return promediolista;
}


