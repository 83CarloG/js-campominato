//	Il computer deve generare 16 numeri casuali tra 1 e 100.
//	I numeri non possono essere duplicati
//	In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
//	L’utente non può inserire più volte lo stesso numero.
//	Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
//	La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
//	Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

var bombe = 16;
var tentativi = 100;

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
		return false;
	}
}
//	creo variabile array che contiene i numeri bomba
var numeriBomba = [];
//	ciclo che chiama la mia funzione di generazione dei numeri 16 volte  while(i<bombe)
    //	check che il numero non sia duplicato
    //	se non è duplicato, lo salvo nell'array bombe
for (var i = 0; i < bombe; i++) {
	var numeroBombaProvv = numberRandom(1, 100);
	while (checkDoppione(numeriBomba, numeroBombaProvv)) {
		numeroBombaProvv = numberRandom(1, 100);
	}
	numeriBomba.push(numeroBombaProvv);
}

console.log(numeriBomba);
