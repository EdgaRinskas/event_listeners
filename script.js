const numbersDiv = document.getElementById("numbers");
let number = 5;

function updateDisplay() {
    numbersDiv.innerHTML = '';

    const h3 = createEl("h3", number);
    const plusBtn = createEl("button", "+", increment);
    const resetBtn = createEl("button", "Reset", reset);
    const minusBtn = createEl("button", "-", decrement);
    const input = createEl("input", "", null, "number");

    input.value = number;
    input.placeholder = "Enter a number";
    input.addEventListener("input", () => {
        const inputValue = parseInt(input.value);
        if (!isNaN(inputValue)) {
            number = inputValue;
            updateDisplay();
        }
    });

    minusBtn.disabled = number < 2;
    plusBtn.disabled = number >= 10;
    h3.style.color = number >= 5 ? "green" : "red";
}

function createEl(tag, text = '', clickHandler = null, type = '') {
    const el = document.createElement(tag);
    el.textContent = text;
    if (clickHandler) {
        el.addEventListener("click", clickHandler);
    }
    if (type) {
        el.type = type;
    }
    numbersDiv.appendChild(el);
    return el;
}

function increment() {
    if (number < 10) {
        number++;
        updateDisplay();
    }
}

function decrement() {
    if (number > 1) {
        number--;
        updateDisplay();
    }
}

function reset() {
    number = 5;
    updateDisplay();
}

updateDisplay();