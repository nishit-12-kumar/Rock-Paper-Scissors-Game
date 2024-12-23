const Rock = document.getElementById("Rock");
const Paper =  document.getElementById("Paper");
const Scissor =  document.getElementById("Scissor");
const PlayerChoice = document.getElementById("PlayerChoice");
const ComputerChoice = document.getElementById("ComputerChoice");

const Array = ["Rock" , "Paper" , "Scissor"];

const PlayBtn = document.getElementById("PlayBtn");
const ResetBtn = document.getElementById("ResetBtn");
let Result = document.getElementById("result");

let PlayerDisplay = document.getElementById("pDisplay");
let ComputerDisplay = document.getElementById("cDisplay");


let PlayerCount = 0;
let ComputerCount = 0;


Rock.addEventListener("click" , event => {
    Paper.style.border = "none";
    Scissor.style.border = "none";
    Rock.style.border = "3px solid black";
    PlayerChoice.textContent = "✊";
    ComputerChoice.textContent = "";
    Result.textContent = "";

})

Paper.addEventListener("click" , event => {
    Rock.style.border = "none";
    Scissor.style.border = "none";
    Paper.style.border = "3px solid black";
    PlayerChoice.textContent = "✋";
    ComputerChoice.textContent = "";
    Result.textContent = "";


})

Scissor.addEventListener("click" , event => {
    Rock.style.border = "none";
    Paper.style.border = "none";
    Scissor.style.border = "3px solid black";
    PlayerChoice.textContent = "✌️";
    ComputerChoice.textContent = "";
    Result.textContent = "";


})



PlayBtn.onclick = function(){
    if(PlayerChoice.textContent == ""){
        Result.textContent = "Click Select Your Chance";

    }
    else{
        let RandomNum = Math.floor(Math.random()*3);
        console.log(Array[RandomNum]);
        ComputerChoice.textContent = document.getElementById(`${Array[RandomNum]}`).innerHTML;


        //Game Logic
        if(PlayerChoice.textContent === ComputerChoice.textContent){
            Result.textContent = "It's Tie 😲";
            console.log(PlayerChoice.textContent);
        }
        else{

            switch(PlayerChoice.textContent){

                case "✊":
                    if(ComputerChoice.textContent === "✌️"){
                        PlayerCount++;
                        Result.textContent = "You Win 😁";
                    }
                    else{
                        ComputerCount++;
                        Result.textContent = "You Loose 😣";
    
                    }
                    break;

                    case "✋":
                    if(ComputerChoice.textContent === "✊"){
                        PlayerCount++;
                        Result.textContent = "You Win 😁";
                    }
                    else{
                        ComputerCount++;
                        Result.textContent = "You Loose 😣";
                    }
                    break;

                    case "✌️":
                    if(ComputerChoice.textContent === "✋"){
                        PlayerCount++;
                        Result.textContent = "You Win 😁";
                    }
                    else{
                        ComputerCount++;
                        Result.textContent = "You Loose 😣";
                    }
                    break;
            }
            }
        
    PlayerDisplay.textContent = `Player : ${PlayerCount}`;
    ComputerDisplay.textContent = `Computer : ${ComputerCount}`;
    }

}


console.log(PlayerCount);



ResetBtn.onclick = function(){

    Rock.style.border = "none";
    Scissor.style.border = "none";
    Paper.style.border = "none";
    PlayerChoice.textContent = "";
    ComputerChoice.textContent = "";
    Result.textContent = "Click Select Your Chance";
    ComputerCount = 0;
    PlayerCount = 0;
    PlayerDisplay.textContent = `Player : ${PlayerCount}`;
    ComputerDisplay.textContent = `Computer : ${ComputerCount}`;




}