/* SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while. */

let num;
let sum = 0;

let i = 0

while(i<5){
    num = Number(prompt('Inserisci un numero'));

    sum += num;

    i++
}

console.log(`la somma di tutti i numeri è ${sum}`);


/* for (let i = 1; i<=5; i++){

    num = Number(prompt('Inserisci un numero'));

    sum += num;

}

console.log(`la somma di tutti i numeri è ${sum}`); */