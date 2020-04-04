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
        const phrase1 = new Phrase('Hello there');
        const phrase2 = new Phrase('Luke i am your father');
        const phrase3 = new Phrase('harry potter');
        const phrase4 = new Phrase('superman');
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
 };