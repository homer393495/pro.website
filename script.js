// script.js
console.log('Pro Website script loaded!');

function showMessage() {
    alert('Welcome to Pro Website!');
}

function calculateSum(num1, num2) {
    return num1 + num2;
}

function generateAI() {
    // AI generation logic here
    return 'AI generated content';
}

// Event listener for button click
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('messageButton');
    button.addEventListener('click', showMessage);
});

// You can add more functions or code here as needed
