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
// for keypress
const keypress = document.querySelectorAll('button.key');

keyboard.addEventListener('click', (e)=>{

    if(e.target.tagName == 'BUTTON'){
        
        game.handleInteraction(e.target);
 
    }
    
});

const overlay = document.querySelector('div#overlay');

// this controls what the keys are going to do
document.addEventListener('keydown', (e)=>{
    // this part makes the keyup click on the startGame()
    if(e.key == 'Enter' ){
        if(overlay.style.display == '' || overlay.style.display == 'flex'){
            startButton.click();
        };
    } else if(e.key !== 'Enter' && overlay.style.display == 'none' && e.key !== 'Backspace'){
        // this part transfor the keydown into an element reference to pass it to the handleInteraction function
        let elementPressed;
        let keyEvent = e.key;
        for(let i = 0; i < keypress.length; i++){
            
            if(keypress[i].textContent === keyEvent){
                elementPressed = keypress[i];
                break
            };
        };
        if(!elementPressed.disabled){
            
        game.handleInteraction(elementPressed);

        }
    };

});