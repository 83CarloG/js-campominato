//	Il computer deve generare 16 numeri casuali tra 1 e 100.
//	I numeri non possono essere duplicati
//	In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//	L’utente non può inserire più volte lo stesso numero.
//	Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//	La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//	Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50

//	funzione che genera un numero casuale tra 1 e 100
function numberRandom (min, max) {
	var numRandom = Math.floor(Math.random() * (max - min + 1)) + min;
	return numRandom;
}
//	funzione che dato un array e un numero mi controlla che il numero non sia già nell'array
function inArray (arr, elemento) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === elemento) {
			return true;
		}
	}
	return false;
}
// Numero Bombe - MODIFICABILE
var bombe = 16;
//	creo variabile array che contiene i numeri bomba
var arrBomba = [];
// Array tentativi
var arrTentativi = [];
// imposto il livello e i tentativi
alert('Benvenuto!! Stai per entrare nel Campo Minato! \n Scegli un livello di difficoltà \n');
var maxTentativiBombe;
var livello = parseInt(prompt('Inserisci la difficolta(0/1/2)'));
switch (livello) {
	case 0:
		maxTentativiBombe = 100;
		break;
	case 1:
		maxTentativiBombe = 80;
		break;
	case 2:
		maxTentativiBombe = 50;
		break;
	default:
		maxTentativiBombe = 100;
}
alert('Pronto? Inserisci un numero da 1 a ' + maxTentativiBombe + ' e spera di non pestare una Bomba')
// Riempo l'arrBomba con le mie bombe univoche
for (var i = 0; i < bombe; i++) {
	var numeroBombaProvv = numberRandom(1, maxTentativiBombe);
	while (inArray(arrBomba, numeroBombaProvv)) {
		numeroBombaProvv = numberRandom(1, maxTentativiBombe);
	}
	arrBomba.push(numeroBombaProvv);
}
// Stampo per controllo e per i prof
console.log(arrBomba);
// variabili booleana haPerso = false
var haiPerso = false;
// Inizio il ciclo do-while per verificare i tentativi del giocatore e dare un esito
var numeroTentativi = 0;
do {
	// prompt in cui chiedo all'utente un numero
	var tentativo = parseInt(prompt('inserisci un numero da 1 a ' + maxTentativiBombe));
	// check che il numero sia una variabile di tipo number
	// check che il numero sia compreso tra 1 e 100
	while (isNaN(tentativo) || tentativo < 1 || tentativo > maxTentativiBombe ) {
		tentativo = parseInt(prompt('Non hai inserito un numero da 1 a ' + maxTentativiBombe));
	}
	// check che il numero non sia duplicato nell'array utente
	while (inArray(arrTentativi, tentativo)) {
		tentativo = parseInt(prompt('Numero già inserito!! inserisci un numero da 1 a ' + maxTentativiBombe));
	}
	tentativo = parseInt(tentativo);
	// se non è duplicato, salvo il numero nell'array utente
	arrTentativi.push(tentativo);
	// check che il numero non sia nell'array bomba
	haiPerso = inArray(arrBomba, tentativo);
	numeroTentativi++;
	console.log(tentativo);
	console.log(arrTentativi);
} while ((numeroTentativi < maxTentativiBombe) && (!haiPerso));

// Comunico il risultato al giocatore
haiPerso ? alert('BOOOOOOOOOOM Hai perso, i tuoi tentativi sono stati ' + arrTentativi.length + '!') : alert('HAI VINTO!! i tuoi tentativi sono stati ' + arrTentativi.length + '!');
