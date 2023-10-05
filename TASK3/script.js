
function appendToDisplay(value) {
    document.getElementById('display').textContent += value;
}

function clearDisplay() {
    document.getElementById('display').textContent = '';
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').textContent);
        document.getElementById('display').textContent = result;
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
    }
}
