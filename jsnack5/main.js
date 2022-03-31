/* Snack5 (Bonus)
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

//dichiaro l'array fruits e inserisco al suo interno tre elementi.
let fruits = ["apple", "cherry", "strawberry"];

//dichiaro l'array  colors e inserisco al suo interno sei elementi.
let colors = ["red","green","yellow","blue","pink","orange"];

//imposto la condizione per confrontare le lunghezze dei due array.
if (colors.length < fruits.length){

    //dichiaro la variabile i e la inizializzo quanto la lunghezza dell'array più piccolo
    let i = colors.length;

    //imposto un ciclo while il cui limite è la lunghezza dell'array più grande
    while (i < fruits.length){

        //pusho un elemento nell'array più corto
        colors.push("element");

        i ++
    }

    //stampo i due array che avranno la stessa lunghezza
    console.log(colors);
    console.log(fruits);
    


} 
//la condizione in cui l'altro array sarà più lungo
else if (colors.length > fruits.length) {

    //la variabile sarà uguale alla lunghezza dell'array più corto
    i = fruits.length

    //imposto ciclo while il cui limite è la lunghezza dell'array più grande
    while (i < colors.length){

        //pusho un elemento nell'array più corto
        fruits.push("element");
        
        i ++
    }

    //stampo i due array che avranno la stessa lunghezza
    console.log(colors);
    console.log(fruits);
    
} else {

    //stampo i due array che avranno la stessa lunghezza
    console.log(colors);
    console.log(fruits);

}

