let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector("#Msg");

let turnO = true; // Initialize turn tracker

// Define winning patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

// Add click event to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") { // Only allow clicks on empty boxes
            console.log("box was clicked");

            // Toggle between "O" and "X" based on the current turn
            if (turnO) {
                box.innerText = "O";
                turnO = false;
            } else {
                box.innerText = "X";
                turnO = true;
            }

            // Check for a winner after each click
            checkWinner();
        }
    });
});

// Function to check for a winner
const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        // Check if all positions in a pattern are filled and match
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("Winner:", pos1val);
            msgContainer.innerText = `Congratulations! The winner is: ${pos1val}`;
            msgContainer.classList.remove("hide"); // Show the winner message
            return; // Exit the function once a winner is found
        }
    }
};

// Reset the game
reset_btn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear all boxes
    });
    msgContainer.innerText = ""; // Clear the winner message
    turnO = true; // Reset turn to "O"
    msgContainer.classList.add("hide"); // Hide the winner message
});
