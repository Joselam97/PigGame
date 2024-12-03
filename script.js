// Activates strict mode to enforce secure coding practices, such as preventing the use of undeclared variables.
'use strict';

// Selecting elements from the DOM
const player0El = document.querySelector('.player--0'); // Selects the section for Player 0 and 1
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0'); // Selects the element displaying Player 0's and 1's total score
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0'); // Selects the element displaying Player 0's and 1's current score
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice'); // Selects the dice image element

const btnNew = document.querySelector('.btn--new'); // Selects the "New Game" button
const btnRoll = document.querySelector('.btn--roll'); // Selects the "Roll Dice" button
const btnHold = document.querySelector('.btn--hold'); // Selects the "Hold" button



// Variables to manage game state
let scores, currentScore, activePlayer, playing;


// Initializes game values and resets the game state
const init = function () {
  scores = [0, 0]; // An array to store the total scores of both players
  currentScore = 0;
  activePlayer = 0;
  playing = true; // Indicates if the game is currently being played

   // Resets the scores displayed on the screen
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;

  // Hides the dice image at the start
  diceEl.classList.add('hidden');

  // Removes winner and active styles to reset players
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');

  player0El.classList.add('player--active'); // Sets Player 0 as active
  player1El.classList.remove('player--active'); // Ensures Player 1 is not active
};
init(); // Calls the function to set up the initial game state


// Switches the active player and resets the current score
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0; // Resets the current score for the active player on the screen
  currentScore = 0;
  // Toggles between Player 0 and Player 1
  activePlayer = activePlayer === 0 ? 1 : 0;

   // Toggles the active class to visually indicate the active player
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};


// Dice roll functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generates a random dice roll between 1 and 6
    const dice = Math.trunc(Math.random() * 6) + 1;

    // Makes the dice image visible
    diceEl.classList.remove('hidden');
    diceEl.src = `img/dice-${dice}.png`;

    // If the roll is not 1:
    if (dice !== 1) {
      // Add the roll value to the current score
      currentScore += dice;

      // Display the updated score
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switches to the other player if the roll is 1
      switchPlayer();
    }
  }
});


// "Hold" button functionality to save the current score
btnHold.addEventListener('click', function () {
  if (playing) {
    // Adds the current score to the active player's total score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Checks if the player has won, in case the score is >= 100
    if (scores[activePlayer] >= 100) {
      // Ends the game
      playing = false;
      // Hides the dice
      diceEl.classList.add('hidden');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner'); // Marks the player as the winner

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active'); // Removes the active status
    } else {
      // Switches to the other player if the game is not yet won
      switchPlayer();
    }
  }
});

// "New Game" button functionality to reset the game
btnNew.addEventListener('click', init); // Resets the game state by re-initializing all variables and styles