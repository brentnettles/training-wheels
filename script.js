

function askQuestion() {
    const userAnswer = document.getElementById("userAnswer").value;
    const responseElement = document.getElementById("response");

    // Define your question and correct answer
    const question = "What is the Artist's name?";
    const correctAnswer = "Georgia O'Keeffe";

    // Check if the answer is correct
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        responseElement.innerHTML = "It's <a href='https://en.wikipedia.org/wiki/Georgia_O%27Keeffe' target='_blank'>Georgia</a>, Baby!";
    } else {
        responseElement.textContent = "Please try again.";
        // Optionally, you can clear the input field for the next attempt
        document.getElementById("userAnswer").value = "";
    }
}

// Handle key press event for "Enter" key
document.getElementById("userAnswer").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        askQuestion();
    }
});