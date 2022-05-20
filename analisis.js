// helpers
function espar(numerito){
    return (numerito % 2 === 0)
}


function calcularpromedio(lista){

    const sumalista = lista.reduce(
        function (valoracumulado=0,nuevoelemento){
        return valoracumulado + nuevoelemento;
        }     
    );
    const promediolista= sumalista/lista.length

    return promediolista;
}
// calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2)    
    
    if(espar(lista.lenght)){

        const personitamitad1 =lista[mitad-1]
        const personitamitad2 =lista[mitad]

        const mediana = calcularpromedio([personitamitad1,personitamitad2])

    }else{
        const personitamitad =lista[mitad]
        console.log(personitamitad)
        return personitamitad;
    }
}


// mediana general
const salarioscol = colombia.map(
    function(personita){
        return personita.salary
    }
);

const salariossort = salarioscol.sort(
    function(salaryA,salaryB){
        return salaryA - salaryB
    }
);

const medianagenral =medianaSalarios(salariossort)


// mediana top 10%

const splitestart = (salariossort.length * 90 ) / 100;
const splitecount = salariossort.length - splitestart;

const salariostop10 = salariossort.splice(splitestart,splitecount,)


const medianatop10 = medianaSalarios(salariostop10);

 console.log({medianagenral,
     medianatop10})
