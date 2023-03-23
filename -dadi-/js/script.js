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

  // Condizioni
  if (utente > pc){
    console.log('vince utente');
  } else if (utente < pc){
    console.log('vince pc');
  } else {
    console.log('pareggio');
  }

  // Messaggio visualizzato
  let message = `Dado Utente = ${utente} <br>
  Dado Pc = ${pc}`;
  const dadi = document.getElementById('dadi').innerHTML = message;
  
});

