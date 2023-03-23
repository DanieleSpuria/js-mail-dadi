/*
1. Input che chiede email all'utente. Agganciarlo ad una variabile.
2. Button che salva la mail inserita in una variabile;
2. Array con lista degli utenti accettati.
3. Ciclo For che controlla se l'email inserita è presente nella lista iniziale. 
4. Stampare risultato ricerca.
*/

// Lista utenti accettati
const lista = [
  'filippo@gmail.com',
  'giovanni@hotmail.com',
  'cataldo@yahoo.com',
  'esmeralda@libero.it',
  'daniele.spuria.jama@gmail.com'
];

// Input
const input = document.getElementById('email');

// Button
const button = document.querySelector('button');

button.addEventListener('click', function() {

  const email = input.value;

  let output = false;

  for (let i = 0; i < lista.length; i++) {

    if (email === lista[i]) {
      output = true;
    }  
    
  }

  if(output === true) {
    console.log('Benvenuto!');
  } else {
    console.log('Non sei autorizzato a procedere!');
  }

  input.value = '';

});




