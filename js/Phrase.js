/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js *
 * Display phrase on game board
*/

class Phrase{

  constructor(phrase){
    this.phrase = phrase.toLowerCase();
        
  };

  addPhraseToDisplay() {

    const phraseDiv = document.querySelector('#phrase');
    const ul = phraseDiv.firstElementChild;

    const splitPhrase = this.phrase
    .split('');
    // Log splited phrase to console
    console.log(splitPhrase);

    // Forloop to add each item to the DOM
    for(let i = 0; i < splitPhrase.length; i++){
      let letter = document.createElement('li');
      letter.textContent = splitPhrase[i];
      // to check if the content is letter or space
      if(splitPhrase[i] != ' '){
        letter.className = `hide letter ${splitPhrase[i]}`;
        ul.appendChild(letter);
      } else{
        letter.className = `hide space`;
        ul.appendChild(letter);
      };
    };
  };
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
  checkLetter(letter) {

    let test = false;
    let checkPhrase = this.phrase.split('');

    for(let i = 0; i < checkPhrase.length; i++){

      if(checkPhrase[i] == letter){
        test = true;
      };
    };
    return test;
  };

/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
  showMatchedLetter(letter) {

    const phraseDiv = document.querySelector('#phrase');
    const ul = phraseDiv.firstElementChild;
    let li = ul.children;

    for(let i = 0; i < li.length; i++){

      let element = li[i];
      if(element.className == `hide letter ${letter}`){
        element.className = `show letter ${letter}`;
      };

    };

  };

};