// get computer to use a random number from 0 to 1 to return rock or paper or scissors
// write a code to allow human enter numbers and return rock or paper or scissors

                      

function getComputerChoice () {
    let game = Math.floor((Math.random() * 3)); 

    if (game === 0) {
        return console.log('Rock');
    }
    else if (game === 1) {
        return console.log('Paper');
    }
    else {
        return console.log('Scissors');
     
    }

}
console.log(getComputerChoice ())

function getHumanChoice (choose) {
    

    if (choose === 0) {
        return console.log('Rock');
    }
    else if (choose === 1) {
        return console.log('Paper');
    }
    else {
        return console.log('Scissors');
     
    }

 }
let userChoice = parseInt(prompt('Enter a number (0 for rock, 1 for paper, 2 for scissors:'))

 console.log(getHumanChoice (userChoice))

//     
  


