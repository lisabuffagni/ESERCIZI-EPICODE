/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numbers = {
  num1: 6,
  num2: 11
};

if (numbers.num1 > numbers.num2) {
  console.log("Maggiore: " + numbers.num1);
} else {
  console.log("Minore: " + numbers.num2);
}


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number = {
  value: 2
};

if (number.value !== 5) {
  console.log("not equal");
}


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let numero = {
  value: 50
};

if (number.value % 5 === 0) {
  console.log("divisibile per 5");
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cifre = {
  num1: 3,
  num2: 5
};

if (cifre.num1 === 8 || cifre.num2 === 8 || cifre.num1 + cifre.num2 === 8 || cifre.num1 - cifre.num2 === 8) {
  console.log("True");
} else {
  console.log("False");
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 75;
let shipping = 10;

if (totalShoppingCart > 50) {
  console.log("Tot: " + totalShoppingCart + " free shipping");
} else {
  let totalCharge = totalShoppingCart + shipping;
  console.log("Tot: " + totalCharge);
}



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalWithBlackFridayDiscount = totalShoppingCart * 0.8;

if (totalShoppingCart > 50) {
  console.log("Tot: " + totalWithBlackFridayDiscount + " free shipping");
} else {
  console.log("Tot: " + totalWithBlackFridayDiscount + shipping);
}



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Crea tre variabili e assegna loro valori numerici
let num1 = 9;
let num2 = 7;
let num3 = 3;

if (num1 >= num2 && num1 >= num3) {
    if (num2 >= num3) {
        console.log(num1, num2, num3);
    } else {
        console.log(num1, num3, num2);
    }
} else if (num2 >= num1 && num2 >= num3) {
    if (num1 >= num3) {
        console.log(num2, num1, num3);
    } else {
        console.log(num2, num3, num1);
    }
} else {
    if (num1 >= num2) {
        console.log(num3, num1, num2);
    } else {
        console.log(num3, num2, num1);
    }
}

//or

let array = [num1, num2, num3];

array.sort();

array.reverse();

console.log(array);



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/


/* SCRIVI QUI LA TUA RISPOSTA */
let value = "5";

if (typeof value === 'number') {
  console.log("True");
} else {
  console.log("False");
}



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)


if (value % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}



/* SCRIVI QUI LA TUA RISPOSTA */
if (number.value % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 10
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else if (val == 10) {
      console.log("Uguale a 10");
    } else if (val > 10) {
      console.log("Maggiore di 10")
    }



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/


const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName

console.log(me);


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();

console.log(me);



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let decina = [];

decina.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(decina);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
decina.pop();
decina.push(100);

console.log(decina)