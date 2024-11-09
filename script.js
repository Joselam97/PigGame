'use strict';

// Seleccionando elementos
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('.score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Iniciando las variables
score0El.textContent = 0;
score0El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

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
        current0El.textContent = currentScore; 
    } else { //Sino cambia al otro player

    }
});