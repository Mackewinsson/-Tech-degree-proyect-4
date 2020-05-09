/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const startButton = document.querySelector('#btn__reset');

startButton.addEventListener('click', (e) =>{
    game = new Game();
    game.startGame(); 
});
    
const keyboard = document.querySelector('#qwerty');

keyboard.addEventListener('click', (e)=>{

    if(e.target.tagName == 'BUTTON'){
        
        game.handleInteraction(e.target);
 
    }
    
});

document.addEventListener('keydown', (e)=>{
    if(e.key !== 'Enter'){
        game.handleInteraction(e.key);
    }else {
        game = new Game();
        game.startGame();
    };
});