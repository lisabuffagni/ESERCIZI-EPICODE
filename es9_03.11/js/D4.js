/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area (x, y) {
    let area = x * y;
    console.log(area);
    return area;
}

area(11, 12);



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a, b) {
    if (a !== b) {
        let sum = a + b;
        console.log(sum);
        return sum;
    } else if (a === b) {
        let molsum = (a + b) * 3;
        console.log(molsum);
        return molsum;
    }
}

crazySum(5, 5)



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(primo, secondo) {
    if (primo < secondo) {
        let diff = primo - secondo;
        console.log(diff);
        return diff;
    } else if (primo > secondo) {
        let moldiff = (primo - secondo) * 3;
        console.log(moldiff);
        return moldiff;
    }
}

crazyDiff(40, 19)



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}

boundary(20)



/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa) {
    if (stringa !== "EPICODE") {
        let s = "EPICODE " + stringa;
        console.log(s);
        return s;
    } else if (stringa === "EPICODE") {
        let e = "EPICODE";
        console.log(e);
        return e;
    }
}

epify("HENLO");



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(number) {
    if (number % 3 || number % 7) {
        let messaggio1 = "Il numero è divisibile per 3 o 7";
        console.log(messaggio1);
        return messaggio1;
    } else {
        let messaggio2 = "Il numero non è divisibile per 3 o 7";
        console.log(messaggio2);
        return messaggio2;
    }
}

check3and7(28);



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(valore) {
    
}


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
