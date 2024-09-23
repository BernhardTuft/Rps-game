// Step 1: Get User's Choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: Please choose either rock, paper, or scissors.');
    }
  };
  
  // Step 2: Get Computer's Choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  };
  
  // Step 3: Determine the Winner
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'You win with the secret cheat code!';
    }
  
    if (userChoice === computerChoice) {
      return 'The game is a tie!';
    }
  
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
  };
  
  // Step 4: Play the Game
  const playGame = () => {
    const userChoice = getUserChoice('rock'); // Replace 'rock' with 'paper', 'scissors', or 'bomb' for testing
    const computerChoice = getComputerChoice();
  
    console.log(`You threw: ${userChoice}`);
    console.log(`The computer threw: ${computerChoice}`);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  // Start the game
  playGame();
  
