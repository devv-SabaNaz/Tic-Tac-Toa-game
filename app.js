let boxes = document.querySelectorAll(".box"); 
let resetBtn = document.querySelector("#reset-btn"); 
let newGameBtn = document.querySelector("#new-btn"); 
let msgContainer = document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg"); 

let turno = true; //playerx, player0 

const winpatterns = [ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]; 

// Merged your two resetGame declarations into one, keeping your logic
const resetGame = () => { 
    turno = true; 
    enableboxes(); // Fixed lowercase typo
    msgContainer.classList.add("hide"); 
} 

boxes.forEach((box) => { 
    box.addEventListener("click", () => { 
        if(turno){ // Fixed typo: changed turnO to turno
            box.innerText = "O"; 
            box.classList.add("color-o");
            box.classList.remove("color-x");
            turno = false; 
        } else { 
            box.innerText = "x"; 
            box.classList.add("color-x");
            box.classList.remove("color-o");
            turno = true; // Fixed typo: changed turnO to turno
        } 
        box.disabled = true; 
        checkWinner(); 
    }); 
}); 

const disableboxes = () => { 
    for (let box of boxes) { 
        box.disabled = true; 
    } 
} 

const enableboxes = () => { 
    for (let box of boxes) { 
        box.disabled = false; 
        box.innerText = ""; 
        box.classList.remove("color-o", "color-x");
    } 
} 

const showWinner = (Winner) => { 
    msg.innerText = `Congratulation, Winner is ${Winner}`; 
    msgContainer.classList.remove("hide"); 
    disableboxes(); 
}; 

const checkWinner = () => { 
    for( let Pattern of winpatterns) { 
        let pos1val = boxes[Pattern[0]].innerText; 
        let pos2val = boxes[Pattern[1]].innerText; 
        let pos3val = boxes[Pattern[2]].innerText; 
        
        if(pos1val !="" && pos2val !="" && pos3val !=""){ 
            if(pos1val === pos2val && pos2val === pos3val){ 
                showWinner(pos1val); 
            } 
        } 
    } 
}; 

// Fixed typo: resetgame changed to resetGame, and connected resetBtn
newGameBtn.addEventListener("click", resetGame); 
resetBtn.addEventListener("click", resetGame);