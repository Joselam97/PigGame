'use strict';

// Seleccionando elementos
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Iniciando las variables
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Funcionalidad al dado
btnRoll.addEventListener('click', function(){
    //1.Genera un roll random al dado
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2.Muestra el dado
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    //3.Checkea si el dado es 1
    if(dice !== 1){
        //Si no es 1, agrega el puntaje del dado
        currentScore += dice;
        //Va agregando puntaje al activePlayer, siempre y cuando no caiga dado 1
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;


    } else { //Sino cambia al otro player
        //cambiando players entre player0 y player1
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;

        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
    }
});