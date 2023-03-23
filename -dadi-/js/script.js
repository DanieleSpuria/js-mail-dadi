/*
1. Inserire variabile con math random per l'utente e per il computer.
3. Creare bottoni per visualizzare i risultati.
2. Confrontare risultati.
*/

// Generatore numeri
let utente = Math.ceil(Math.random() * 6);
let pc = Math.ceil(Math.random() * 6);
console.log('utente', utente, 'pc', pc);

// Bottone
const button = document.querySelector('button');
button.addEventListener('click', function() {

  let message = `Dado Utente = ${utente} <br>
  Dado Pc = ${pc}`;

  const dadi = document.getElementById('dadi').innerHTML = message;
  
});

