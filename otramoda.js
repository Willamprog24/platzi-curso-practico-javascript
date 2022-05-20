const NUMBERS = [2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 5, 5, 9];


// function mode(arr){
//         return arr.sort((a,b) => 
//            arr.filter(v => v===a).length - arr.filter(v => v===b).length
        
//     ).pop();
        
// }

let nuevoarray = NUMBERS.filter(V => V < 5)

let otroarray = NUMBERS.filter(V => V >= 5)

console.log(NUMBERS.length)


