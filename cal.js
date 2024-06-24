function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function deleteChar() {
    let display = document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === '') {
        display.textContent = '0';
    }
}

function appendCharacter(char) {
    let display = document.getElementById('display');
    if (display.textContent === '0') {
        display.textContent = char;
    } else {
        display.textContent += char;
    }
}

function calculateResult() {
    let display = document.getElementById('display');
    try {
        display.textContent = eval(display.textContent);
    } catch (error) {
        display.textContent = 'Error';
    }
}
