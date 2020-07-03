console.log("Tic-Tac-Toe"); //Test script page is linked to HTML page


// identify all the elements (all the divs in game area) that match my "sector" class name.

var allBoxes = document.querySelectorAll('.sector');

// identify the element (button) that matches my "resetButton" class name

var reset = document.querySelector('.resetButton');

// identify the element (span in my h4 tag) that matches my "resetButton" class name

var startingPlayer = document.querySelector('.playerName');

// identify the element (h2 tag) that matches my "gameWinner" class name

var gameWinner = document.querySelector('.gameWinner');

// make an array of all possible winning combinatios

var winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

// set initial condition for winner being false

var winner = false;

// function checking for winner

var checkForWin = function(){
    for (var i = 0; i < winningCombos.length; i++){

//loop through all the winning combinations and if any 3 boxes have the same colour (red or blue), declare a winner by making "winner = true"

        if (allBoxes[winningCombos[i][0]].className == 'redBox' &&
            allBoxes[winningCombos[i][1]].className == 'redBox' &&
            allBoxes[winningCombos[i][2]].className == 'redBox'){

                //display gameWinner message on page if above conditions are met

                gameWinner.textContent = "RED PLAYER...YOU ARE THE WINNER!!!";
                console.log ('Red Player wins');
                winner = true;
        }
        if (allBoxes[winningCombos[i][0]].className == 'blueBox' &&
            allBoxes[winningCombos[i][1]].className == 'blueBox' &&
            allBoxes[winningCombos[i][2]].className == 'blueBox'){

                //display gameWinner message on page if above conditions are met

                gameWinner.textContent = "BLUE PLAYER...YOU ARE THE WINNER!!!";
                console.log ('Blue Player wins');
                winner = true;
        }
    }
}


var counter = 0;

// if all 9 boxes are selected and no win is obtaineded in the last move, the game must be a draw. the checkForWin function must run before before checkForDraw. will see this later

var checkForDraw = function(){
    if (allBoxes[0].className !== 'sector' &&
        allBoxes[1].className !== 'sector' &&
        allBoxes[2].className !== 'sector' &&
        allBoxes[3].className !== 'sector' &&
        allBoxes[4].className !== 'sector' &&
        allBoxes[5].className !== 'sector' &&
        allBoxes[6].className !== 'sector' &&
        allBoxes[7].className !== 'sector' &&
        allBoxes[8].className !== 'sector'){

            console.log('its a draw')

            // display gameWinner message for a draw on page if above conditions are met

            gameWinner.textContent = "IT'S A DRAW FOLKS!!!";
    }
}        
        
// red player stating first has been hardcoded

var turn = "red";

// game displaying that red player will be the fist to begin

startingPlayer.textContent = "RED Player";

// function that dictates player change at the end of each turn

var playerTurn = function(){
    
    // if a win is obtained, there is no need to continue changing players.
    
    if (winner == true){
        return
    }

    // if statement to alert player not to click a sure which has already been selected

    if (event.target.className !== "sector"){
        alert('pick another square!');
        return
    }

    // if it is the red player's turn, change the className of the selected square to redBox which will make it appear red.

    if (turn === "red") {
        event.target.className = "redBox";
        counter = counter + 1;

        //change player to blue once reb player's move has been made

        turn = "blue";
        startingPlayer.textContent = "BLUE Player";

    // if it is the blue player's turn, change the className of the selected square to blueBox which will make it appear blue.  

    } else {
        event.target.className = "blueBox";
        counter = counter + 1;

        //change player to red once a blue player's move has been made

        turn = "red";
        startingPlayer.textContent = "RED Player"
    }
    checkForWin();
    if (winner == false){
        checkForDraw();
    }
}

// function to clear the gameboard
var clearBoard = function(event){
    winner = false;
    for(var i = 0; i < allBoxes.length; i++){
        if (allBoxes[i].className == 'redBox' ||
            allBoxes[i].className == 'blueBox' || 
            allBoxes[i].className == 'sector'){   
            allBoxes[i].className = 'sector';
            turn = "red" 
            startingPlayer.textContent = "RED Player";
            gameWinner.textContent = "";  
        }
    }
}

// reset gameboard button - when clicked will run the clearBoard function
reset.addEventListener('click',clearBoard);

// 
for(var i = 0; i < allBoxes.length; i++){
    allBoxes[i].addEventListener('click',playerTurn);
}    
