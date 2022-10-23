/* L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

const container = document.querySelector('.container');
const button = document.getElementById('playBtn');
const select = document.getElementById('selectDifficolta');
const bombsNumber = 16;

var nuovaPartita = false;

button.addEventListener('click', playBtnClick);

function reset() {
  container.replaceChildren();
}

function generaCaselle(livelloDifficolta) {

  for(let i=0; i<livelloDifficolta; i++){

    const box = document.createElement('div');
    box.className = 'box';
    console.log(box);
    box.innerHTML = i+1;
  
    box.addEventListener('click', function() {
      this.classList.add('azzurro');
    })
    
    container.append(box);
  }

}

function playBtnClick() {
  //console.log('play');
  
  // Pulisce la griglia delle caselle
  reset();

  // Ottiene la difficoltà con cui giocare dal select HTML
  var difficolta = parseInt(select.value);
  
  // In base al livello di difficoltà selezionato, genera una griglia di caselle
  switch(difficolta) {
    case 1:
      generaCaselle(100);
      break;

    case 2:
      generaCaselle(81);
      break;

    case 3:
      generaCaselle(49);
      break;
  }

  nuovaPartita = true;
  button.textContent = "Rigioca";
}

function randomNumber(max, min){
  return Math.floor(Math.random()*(max - min + 1)) + min;
}

function bombsGenerated(livelloDifficolta){
  const bombsArray = [];
  console.log(bombsArray);

  while(bombsArray.length < bombsNumber){
    const bomb = randomNumber(1,livelloDifficolta);
    if(!bombsArray.includes(bomb)){
      bombsArray.push(bomb);
    }

  }
  return bombsArray;
}


