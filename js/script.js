var argButtonName, buttonPaper, buttonRock, buttonScissors, buttonTest;

buttonTest = document.getElementById('button-test');

buttonPaper = document.getElementById('button-paper');
buttonRock = document.getElementById('button-rock');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' został kliknięty');

  var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;


  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
  }
  
  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'nożyce' && argComputerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis');
    } else {
      printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
  playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  console.log('wybór ruchu gracza to: ' + playerInput);
  playerMove = getMoveName(playerInput);
  console.log('ruch gracza to: ' + playerMove);
  randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });



