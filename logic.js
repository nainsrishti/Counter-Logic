// Counter Logic - JavaScript

// Get elements from the DOM
const addButton = document.querySelector('.add');
const subtractButton = document.querySelector('.subtract');
const inputDisplay = document.querySelector('.input');

// Initialize counter value
let counterValue = parseInt(inputDisplay.textContent) || 0;

// Function to update the display
function updateDisplay() {
    inputDisplay.textContent = counterValue;
}

// Function to increment counter
function increment() {
    counterValue++;
    updateDisplay();
    console.log(`Counter incremented to: ${counterValue}`);
}

// Function to decrement counter
function decrement() {
    counterValue--;
    updateDisplay();
    console.log(`Counter decremented to: ${counterValue}`);
}

// Add event listeners
addButton.addEventListener('click', increment);
subtractButton.addEventListener('click', decrement);

// Optional: Add keyboard support
document.addEventListener('keydown', function(event) {
    if (event.key === '+' || event.key === '=') {
        increment();
    } else if (event.key === '-') {
        decrement();
    }
});

// Optional: Prevent counter from going below zero
function decrementWithLimit() {
    if (counterValue > 0) {
        counterValue--;
        updateDisplay();
        console.log(`Counter decremented to: ${counterValue}`);
    } else {
        console.log('Counter cannot go below 0');
    }
}

// Optional: Set maximum limit
function incrementWithLimit(maxValue = 100) {
    if (counterValue < maxValue) {
        counterValue++;
        updateDisplay();
        console.log(`Counter incremented to: ${counterValue}`);
    } else {
        console.log(`Counter cannot exceed ${maxValue}`);
    }
}

// To use limits, replace the event listeners with:
// addButton.addEventListener('click', () => incrementWithLimit(100));
// subtractButton.addEventListener('click', decrementWithLimit);