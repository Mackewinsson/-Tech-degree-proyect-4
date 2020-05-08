/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhases();
        this.activePhrase = null;
    }

    /**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhases(){
        const arrayPhrases = [];
        const phrase1 = new Phrase('Hello');
        const phrase2 = new Phrase('Luke i am your father');
        const phrase3 = new Phrase('harry');
        const phrase4 = new Phrase('super');
        const phrase5 = new Phrase('donald trump');
        arrayPhrases.push(phrase1,phrase2,phrase3,phrase4,phrase5);
        return arrayPhrases;
    };

/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        const ramdomIndex = Math.floor(Math.random()*(4+1));
        return this.phrases[ramdomIndex];
    };
/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {

        // Hide the overlay 

        const overlay = document.querySelector('div#overlay');
        overlay.style.display = 'none';

        // Call getRamdomPhrase 
        
        //
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        console.log(this.activePhrase);


    };

/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {

        const letterList = document.querySelector('#phrase > ul').children;
        let count = 0;

        for(let i = 0; i < letterList.length; i++){

            if(letterList[i].classList.contains('show')){
                count++;
            };
        };

        if(count === letterList.length){
            return true;
        } else{
            return false;
        };
    };

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {

        const lives = document.querySelectorAll('div#scoreboard > ol > li > img');   
        lives[this.missed].setAttribute('src', 'images/lostHeart.png');
        this.missed++;

        if(this.missed > 4){
            this.gameOver(false);
        };
    };
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
        const h1 = document.querySelector('#game-over-message');
        const overlay = document.querySelector('div#overlay');
        overlay.style.display = 'flex';

        if(gameWon === true){
            console.log('true');
            h1.textContent = 'Congratulation! You win!!!';
            overlay.className = 'win'; 
        } else if (gameWon === false){
            console.log('false');
            h1.textContent = 'You lost, try again';
            overlay.className = 'lose'            
        }
    };
};

 