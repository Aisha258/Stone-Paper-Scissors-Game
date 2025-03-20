let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

    

}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "game was draw. play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner =(UserWin, UserChoice, compChoice) =>{
    if(UserWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `you win ! Your ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `you lose ! ${compChoice} beats Your ${UserChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (UserChoice) => {
    console.log("user choice =",UserChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = ",compChoice);

    if(UserChoice === compChoice){
        //draw game
        drawGame();
    }else{
        let UserWin = true;
        if(UserChoice === "rock"){
            //scissors, paper
            UserWin = compChoice === "paper" ? false : true;
        }else if(UserChoice === "paper"){
            //scissor,rock
            UserWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            UserWin = compChoice === "rock" ? false : true;
        }
        showWinner(UserWin, UserChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const Userchoice = choice.getAttribute("id");
       // console.log("choice was clicked", Userchoice);
       playGame(Userchoice);
    });
});