document.addEventListener('DOMContentLoaded', () => {
    const inputBox = document.querySelector('.input-box');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    const updateDisplay = (value) => {
        inputBox.value = value;
    };

    const evaluateExpression = (expression) => {
        try {
            return eval(expression).toString();
        } catch (error) {
            return 'Error';
        }
    };

    const handleButtonClick = (event) => {
        const buttonValue = event.target.textContent;

        if (buttonValue === 'C') {
            currentInput = '';
        } else if (buttonValue === '=') {
            currentInput = evaluateExpression(currentInput) || 'Error';
        } else if (buttonValue === '⌫') {
            currentInput = currentInput.slice(0, -1);
        } else {
            currentInput += buttonValue;
        }

        updateDisplay(currentInput);
    };

    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;

        if (key >= '0' && key <= '9' || ['+', '-', '*', '/', '.'].includes(key)) {
            currentInput += key;
        } else if (key === 'Enter') {
            currentInput = evaluateExpression(currentInput) || 'Error';
        } else if (key === 'Backspace') {
            currentInput = currentInput.slice(0, -1);
        } else if (key === 'Escape') {
            currentInput = '';
        }

        updateDisplay(currentInput);
    });
});
