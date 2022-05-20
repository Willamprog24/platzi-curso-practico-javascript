const lista1 = [1,2,3,1,2,3,4,2,2,2,1]

const lista1acount = {};

lista1.map(
    function (elemento){

        if(lista1acount[elemento]){
            lista1acount[elemento] += 1;
        }else{
            lista1acount[elemento] = 1;
        }
  

    }
)

const lista1array = Object.entries(lista1acount).sort(
    function (elementoA,elementoB){
        return elementoA[1] - elementoB[1];
    }
);

const moda = lista1array[3]