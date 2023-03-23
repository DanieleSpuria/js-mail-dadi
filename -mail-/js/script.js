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

  // Output e reset
  let output = document.getElementById('output');
  console.log(output);
  output.innerHTML = ' ';
  
  // Dati forniti dall'utente
  const email = input.value;

  // Controllo dei dati
  let outputFor = false;
  for (let i = 0; i < lista.length; i++) {
    if (email === lista[i]) {
      outputFor = true;
    }     
  }

  // Stampa dei risultati
  if(outputFor === true) {
    output.append('Benvenuto!')   ;
  } else {
    output.append('Non sei autorizzato a procedere!');
  }

  input.value = '';

});




