const randonNumber=parseInt(Math.random()*100+1);
const guessnum=document.querySelector("#guessnum");
const submit=document.querySelector("#submitBtn");
const prevGuess=document.querySelector(".prevGuess");
const remGuess=document.querySelector('.remGuess');
const result=document.querySelector(".result");
const p=document.createElement("p");
let prev=[];
let numguess=1;
let playGames=true;
if(playGames){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(guessnum.value)
        console.log(guess);
       validateGame(guess);
    })
}

function validateGame(guess){
if(isNaN(guess)){
    alert("Please Enter a valid number");
}else if(guess<1){alert("Please Enter a  number more than 1");

}else if(guess>100){
    alert("Please Enter a number  less than 100");
}else{
    prev.push(guess);
    if(guess===11){
        displayGuess(guess);
        displayMessage(`Game over. Random number is:${randonNumber}`);
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}




function displayGuess(guess){
guessnum.value=""
prevGuess.innerHTML+=`${guess}, `
numguess++; 
remGuess.innerHTML=`${11-numguess}`
}
    
function checkGuess(guess){
    if(guess===randonNumber){
        displayMessage("You Guess it right");
        endGame()
    }else if(guess<randonNumber){
        displayMessage("Number is too Low");
    }
    else if(guess>randonNumber){
        displayMessage("Number is too high");
    }


}

function displayMessage(message){
    result.innerHTML=`${message}`

}

function endGame(){
    guessnum.value='';
    guessnum.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame">Start new game</h2>`
    result.appendChild(p);
    newGame();
    playGames=false;

}

function newGame(){
   
    
}