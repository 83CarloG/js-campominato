//	Il computer deve generare 16 numeri casuali tra 1 e 100.
//	I numeri non possono essere duplicati
//	In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//	L’utente non può inserire più volte lo stesso numero.
//	Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//	La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//	Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
var bombe = 16;
//	funzione che genera un numero casuale tra 1 e 100
function numberRandom (min, max) {
	var numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
	return numRandom;
}
//	funzione che dato un array e un numero mi controlla che il numero non sia già nell'array
function checkDoppione (arr, numero) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === numero) {
			return true;
		}
	}
	return false;
}
//	creo variabile array che contiene i numeri bomba
var arrBomba = [];
var arrTentativi = [];
//	ciclo che chiama la mia funzione di generazione dei numeri 16 volte  while(i<bombe)
    //	check che il numero non sia duplicato
    //	se non è duplicato, lo salvo nell'array bombe
for (var i = 0; i < bombe; i++) {
	var numeroBombaProvv = numberRandom(1, 100);
	while (checkDoppione(arrBomba, numeroBombaProvv)) {
		numeroBombaProvv = numberRandom(1, 100);
	}
	arrBomba.push(numeroBombaProvv);
}
console.log(arrBomba);
// variabili booleana haPerso = false
var haiPerso = false;
// imposto il livello e i tentativi
var maxTentativiBombe = parseInt(prompt('Inserisci la difficolta(0/1/2)'));
while (!((maxTentativiBombe - 0) * (maxTentativiBombe - 2) <= 0)) {
	maxTentativiBombe = parseInt(prompt('Inserisci la difficolta(0/1/2)'));
}
if (maxTentativiBombe === 0) {
	maxTentativiBombe = 100 - bombe;
}	else if (maxTentativiBombe === 1) {
	maxTentativiBombe = 80 - bombe;
} else if (maxTentativiBombe === 2) {
	maxTentativiBombe = 50 - bombe;
};
// Inizio il ciclo do-while per verificare i tentativi del giocatore e dare un esito
var numeroTentativi = 0;
do {
	// prompt in cui chiedo all'utente un numero
	var tentativo = parseInt(prompt('inserisci un numero da 1 a 100'));
	// check che il numero sia una variabile di tipo number
	while (isNaN(tentativo)) {
		tentativo = parseInt(prompt('Non hai inserito un numero da 1 a 100'));
	}
	// check che il numero sia compreso tra 1 e 100
	while (tentativo < 1 || tentativo > 100) {
		tentativo = parseInt(prompt('Non hai inserito un numero da 1 a 100'));
	}
	// check che il numero non sia duplicato nell'array utente
	while (checkDoppione(arrTentativi, tentativo)) {
		tentativo = parseInt(prompt('Numero già inserito!! inserisci un numero da 1 a 100'));
	}
	tentativo = parseInt(tentativo);
	// se non è duplicato, salvo il numero nell'array utente
	arrTentativi.push(tentativo);
	// check che il numero non sia nell'array bomba
	haiPerso = checkDoppione(arrBomba, tentativo);
	numeroTentativi++;
	console.log(tentativo);
	console.log(arrTentativi);
} while ((numeroTentativi < maxTentativiBombe) && (!haiPerso));

// Comunico il risultato al giocatore
if (haiPerso) {
	alert('Hai perso, i tuoi tentativi sono stati ' + arrTentativi.length + '!');
} else {
	alert('HAI VINTO!! i tuoi tentativi sono stati ' + arrTentativi.length + '!');
}
