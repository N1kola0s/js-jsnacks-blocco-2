/* Snack4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari */


//dichiaro un array con all'interno dei numeri interi
let numb = [1,35,6,20,50,45,60,68];

//dichiaro l'indice e lo inizializzo
let i = 0;

//dichiaro una variabile per la somma e la inizializzo
let sum = 0;

//imposto un ciclo while con limite la lunghezza del mio array 
while (i < numb.length){
    
    //imposto la condizione in cui dichiaro che l'indice deve essere dispari
    if(i % 2 !== 0){

        //faccio la somma dei numeri avente indice dispari
        sum = sum + numb[i];
        
    }

    i++
}

//stampo in console la somma dei numeri avente l'indice dispari all'interno dell'array
console.log(sum);