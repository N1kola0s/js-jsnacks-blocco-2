/* Snack3
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome. */


//dichiaro un array con una lista di nomi
let name_list = ['tizio','caio','sempronio','mevio'];


/* console.log(name_list); */


//dichiaro un array con una lista di cognomi
let lastname_list = ['russo','merola', 'esposito','santillo'];

/* console.log(lastname_list); */

//dichiaro un array con una lista vuota
let wrong_list = []

//imposto un ciclo for con limite la lunghezza del primo array
for (let i=0; i < name_list.length; i++){

    //dichiaro una variabile per i nomi avente indice generato in modo random
    let random_name = name_list[Math.floor(Math.random() * name_list.length)];

    //dichiaro una variabile per i nomi avente indice generato in modo random
    let random_lastname = lastname_list[Math.floor(Math.random() * lastname_list.length)];

    //dichiaro una variabile dato dalla somma del nome e del cognome generato in modo random
    let random_full_name = random_name + ' ' + random_lastname;
    /* console.log(full_name) */

    //pusho il nome completo generato in modo random nella lista falsa degli invitati
    wrong_list.push(random_full_name)
    
}

//stampo in console la lista falsa degli invitati 
console.log(wrong_list)








