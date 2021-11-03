import React from 'react'
import PageStyle from '../../components/PageStyle'

const RockPaperScissor = () => {

 // logic
  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
      return userInput;
    } else {
        console.log('Error please type rock, paper or scissors.');
      }
    };
    
    const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()* 3);
    switch (randomNumber){
      case 0:
        return 'rock';
      case 1: 
        return 'paper';
      case 2:
        return 'scissors';
    
      }
    }; 
    
    const determineWinner = (userInput, computerInput) => {
      if (getUserChoice(userInput) === getUserChoice(computerInput)) {
        return 'This game is tied';
      };

      // if computerInput is defined, let's just compare with the 2nd paramter:
      if (computerInput) {
        if (getUserChoice(userInput) === 'rock') {
          if (computerInput === 'paper') {
            return 'Sorry computer won';
          } else {
            return 'Congrats you won';
          }
        }

        if (getUserChoice(userInput) === 'paper') {
          // computer choice will be random here
          if (computerInput === 'scissors') {
            return 'sorry computer won';
          } else {
            return 'Congratulations you won';
          }
        }
  
        if (getUserChoice(userInput) === 'scissors') {
          // computer choice will be random here
          if (computerInput === 'rock') {
            return 'sorry computer won';
          } else {
            return 'congrats you won';
          }
        }
      }

      // if computerInput is not defined and needs to be randomized,
      // then user getComputerChoice() to find a random choice of paper, rock, scissors:
      if (getUserChoice(userInput) === 'paper') {
        // computer choice will be random here
        if (getComputerChoice() === 'scissors') {
          return 'sorry computer won';
        } else {
          return 'Congratulations you won';
        }
      }

      if (getUserChoice(userInput) === 'scissors') {
        // computer choice will be random here
        if (getComputerChoice() === 'rock') {
          return 'sorry computer won';
        } else {
          return 'congrats you won';
        }
      }
  }
    
  console.log(determineWinner('rock', 'scissors'));
  console.log(determineWinner('paper', 'scissors'));
  console.log(determineWinner('rock', 'rock'));

  // logic
  return (
    <PageStyle>
      Place holder screen
    </PageStyle>
  )
}

export default Home