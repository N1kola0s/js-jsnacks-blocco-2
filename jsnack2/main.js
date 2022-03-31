/* Snack2
Inserisci un numero, se è pari stampa il numero,
se è dispari stampa il numero successivo. */


//dichiaro una variabile per il numero che sarà inserito
let num;

//chiedo di inserire un numero
num = Number(prompt('Inserisci un numero'));


//imposto una condizione in cui se il nostro numero è pari verrà stampato in console altrimenti verrà stampato il successivo

if (num % 2 == 0){
    console.log(`Il numero è ${num}`);
    
} else {

    num +=  1;
    console.log(`Il successvio del tuo numero è ${num}`);
}