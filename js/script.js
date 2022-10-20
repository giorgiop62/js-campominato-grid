/* L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.*/

const container = document.querySelector('.container');

for(let i=1; i<101; i++){

  const box = document.createElement('div');
  box.className = 'box';
  console.log(box);
  box.innerHTML = i;

  box.addEventListener('click', function() {
    console.log('cliccato');
    this.classList.add('azzurro');
  })
  

  container.append(box);
}


