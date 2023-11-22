let now = new Date()
let getYear = now.getFullYear()
let getMonth = now.getMonth() + 1; //js conta come 0 l'ultimo giorno del mese prima quindi devo aggiungere 1
let lastDayDate = new Date(getYear, getMonth, 0)
let lastDayOfTheMOnth = lastDayDate.getDate()

creaCalendario()
nomeMese()
creaArrayAppuntamenti()

function creaCalendario() {
        let lastDayDate = new Date(getYear, getMonth, 0)
        let lastDayOfTheMOnth = lastDayDate.getDate()
        let h2 = document.querySelector('header h2');
        h2.innerText = nomeMese(now.getMonth() +1);

    for (let i = 1; i <= lastDayOfTheMOnth; i++) {
        const dayCellNode = document.createElement('div');
        dayCellNode.className = 'day';

        dayCellNode.addEventListener('click', () => {

            selezionaGiorno(dayCellNode)
            
            dayCellNode.classList.add('selected')
            let currentDayAppointments = appointments[i-1];
            if (currentDayAppointments.length > 0) {
                document.querySelector('#appointments').style.display = 'block'
            } else {
                document.querySelector('#appointments').style.display = 'none'
            }
        })

        const day = document.createElement('h3');
        day.innerText = i;
        let today = now.getDate();
        if (today === i) {
            day.className = 'color-epic';
        }

        calendar.appendChild(dayCellNode);
        dayCellNode.appendChild(day);
    }
}

creaCalendario()
    
function nomeMese(m) {
    switch (m) {
        case 1: return 'Gennaio'
        case 2: return 'Febbraio'
        case 3: return 'Marzo'
        case 4: return 'Aprile'
        case 5: return 'Maggio'
        case 6: return 'Giugno'
        case 7: return 'Luglio'
        case 8: return 'Agosto'
        case 9: return 'Settembre'
        case 10: return 'Ottobre'
        case 11: return 'Novembre'
        case 12: return 'Dicembre'
    }
}


function creaArrayAppuntamenti() {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
    }
}


function selezionaGiorno(day) {
    let calendar = document.querySelector('#calendar div')

    for (let i = 0; i < calendar.length; i++) {
        calendar[i].className ='day';
        if (calendar[i] === day) {
            day.classList.add('selected')
        }
    }
}


/*
let now = new Date()
let getYear = now.getFullYear()
let getMonth = now.getMonth() + 1; //js conta come 0 l'ultimo giorno del mese prima quindi devo aggiungere 1
let lastDayDate = new Date(getYear, getMonth, 0)
let lastDayOfTheMOnth = lastDayDate.getDate()

creaCalendario()
nomeMese()
creaArrayAppuntamenti()


function creaCalendario() {
    document.querySelector('h1 + h2');
    h2.innerText = nomeMese(now.getMonth() +1);

    for (let i = 1; i <= lastDayOfTheMOnth; i++) {
        const dayCellNode = document.createElement('div');
        dayCellNode.className = 'day';
        const day = document.createElement('h3');
        day.innerText = i;
        let today = now.getDate();
        if (today === i) {
            day.className = 'color-epic';
        }

        calendar.appendChild(dayCellNode);
        dayCellNode.appendChild(day);
    }
}


function nomeMese(m) {
    switch (m) {
        case 1: return 'Gennaio'
        case 2: return 'Febbraio'
        case 3: return 'Marzo'
        case 4: return 'Aprile'
        case 5: return 'Maggio'
        case 6: return 'Giugno'
        case 7: return 'Luglio'
        case 8: return 'Agosto'
        case 9: return 'Settembre'
        case 10: return 'Ottobre'
        case 11: return 'Novembre'
        case 12: return 'Dicembre'
    }
}*/