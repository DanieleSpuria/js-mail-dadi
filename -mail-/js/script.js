/*
1. Input che chiede email all'utente. Agganciarlo ad una variabile.
2. Button che salva la mail inserita in una variabile;
2. Array con lista degli utenti accettati.
3. Ciclo For che controlla se l'email inserita è presente nella lista iniziale. 
4. Stampare risultato ricerca.
*/

// Input
const input = document.getElementById('email');
console.log(input);

// Button
const button = document.querySelector('button');
console.log(button);

button.addEventListener('click', function() {

  const email = input.value;
  console.log(email);
  
  input.value = '';

});


