function playGame(playerInput) {
    clearMessages();

    const getMoveName = function (argMoveId) {
        if (argMoveId == 1) {
          return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        }
      
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
      }

    const displayCompImage = function (argComputerMove) {
        switch (argComputerMove) {
            case 'kamień':
                printCompImg("images/rock.png");
                break;
            case 'papier':
                printCompImg("images/paper.png");
                break;
            case 'nożyce':
                printCompImg("images/scissors.png");
                break;
        }                   
    }

    const displayPlayerImage = function (argPlayerMove) {
        switch (argPlayerMove) {
            case 'kamień':
                printPlayerImg("images/rock.png");
                break;
            case 'papier':
                printPlayerImg("images/paper.png");
                break;
            case 'nożyce':
                printPlayerImg("images/scissors.png");
                break;
        } 
    }
    
    const displayResult = function (argComputerMove, argPlayerMove) {
        (argComputerMove == 'kamień' && argPlayerMove == 'papier') ? printMessage('Ty wygrywasz!') :
            (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ? printMessage('Ty wygrywasz!') :
            (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ? printMessage('Ty wygrywasz!') :
            (argComputerMove == 'papier' && argPlayerMove == 'kamień') ? printMessage('Komputer wygrał') :
            (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ? printMessage('Komputer wygrał') :
            (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ? printMessage('Komputer wygrał') :
            (argComputerMove == argPlayerMove) ? printMessage('Remis') : printMessage('Bląd, Ty wybrałeś nieznany ruch');        
    }    
    
    const randomNumber = Math.floor(Math.random() * 3 + 1),    
        computerMove = getMoveName(randomNumber),
        playerMove = getMoveName(playerInput);
    
    printMessage('Mój ruch to: ' + computerMove);   
    printMessage('Twój ruch to: ' + playerMove);

    displayCompImage(computerMove);
    displayPlayerImage(playerMove);
    displayResult(computerMove, playerMove);
}

document.getElementById('player-rock').addEventListener('click', function() {
    playGame(1);
});
document.getElementById('player-paper').addEventListener('click', function() {
    playGame(2);
});
document.getElementById('player-scissors').addEventListener('click', function() {
    playGame(3);
});