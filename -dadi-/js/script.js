/*
1. Inserire variabile con math random per l'utente e per il computer.
3. Creare bottoni per visualizzare i risultati.
2. Confrontare risultati.
*/


// Bottone
const button = document.querySelector('button');
button.addEventListener('click', function() {

  // Generatore numeri
  let utente = Math.ceil(Math.random() * 6);
  let pc = Math.ceil(Math.random() * 6);
  console.log('utente', utente, 'pc', pc);

  // Messaggio visualizzato
  let message = `Dado Utente = ${utente} <br>
  Dado Pc = ${pc} <br>`;
  const dadi = document.getElementById('dadi');
  dadi.innerHTML = message;

  // Condizioni
  if (utente > pc){
    dadi.innerHTML += "Vince l'utente!";
  } else if (utente < pc){
    dadi.innerHTML += "Vince il computer!";
  } else {
    dadi.innerHTML += "Pareggio!";
  }

});

