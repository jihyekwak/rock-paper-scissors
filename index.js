const user = {
    currentChoice : null,
    score : 0,
    result: null
};
const computer = {
    currentChoice : null,
    score : 0,
    result: null
};
const choices = ["Lapis", "Papyrus", "Scalpellus"]

function computerChooses() {
  const randomIndex = Math.floor(Math.random()* choices.length);
  computer.currentChoice = choices[randomIndex];
  compareChoices();
}

const result = document.createElement("p");
document.body.appendChild(result);


function compareChoices() {
  if (user.currentChoice == computer.currentChoice) {
    result.innerHTML = `Tie!<br />The computer chose ${computer.currentChoice} and the user chose ${user.currentChoice}.`;
    user.result = "tie";
  } else if (user.currentChoice == choices[0]) {
    if (computer.currentChoice == choices[1]) {
      result.innerHTML = `You loose!<br />The computer chose ${computer.currentChoice} and the user chose ${user.currentChoice}.`;
      user.result = "loose";
    } else if (computer.currentChoice == choices[2]) {
      result.innerHTML = `You won!<br />The computer chose ${computer.currentChoice} and the user chose ${user.currentChoice}.`;
      user.result = "won";
    };
  } else if (user.currentChoice == choices[1]) {
    if (computer.currentChoice == choices[0]) {
      result.innerHTML = `You won!<br />The computer chose ${computer.currentChoice} and the user chose ${user.currentChoice}.`;
      user.result = "won";
    } else if (computer.currentChoice == choices[2]) {
      result.innerHTML = `You loose!<br />The computer chose ${computer.currentChoice} and the user chose ${user.currentChoice}.`;
      user.result = "loose";
    };
  } else if (user.currentChoice == choices[2]) {
    if (computer.currentChoice == choices[0]) {
      result.innerHTML = `You loose!<br />The computer chose ${computer.currentChoice} and the user chose ${user.currentChoice}.`;
      user.result = "loose";
    } else if (computer.currentChoice == choices[1]) {
      result.innerHTML = `You won!<br />The computer chose ${computer.currentChoice} and the user chose ${user.currentChoice}.`;
      user.result = "won";
    };
  };
  resultScore();
}

const choice = document.querySelector(".choice");
choice.onclick = function(event) {
  user.currentChoice = event.target.innerText;
  computerChooses();
}

const score = document.createElement("h3")
document.body.appendChild(score);

function resultScore() {
  if (user.result == "tie") {
    return;
  } else if (user.result == "won") {
    user.score = user.score + 1;
  } else if (user.result == "loose") {
    computer.score = computer.score + 1;
  };
  score.innerHTML = `You ${user.score} : ${computer.score} Computer`;
}
