const numbersDiv = document.getElementById("numbers");
let number = 5;

function updateDisplay() {
    numbersDiv.innerHTML = '';

    const h3Element = createAndAppend("h3", number);
    const plusBtn = createAndAppend("button", "+", () => incrementNumber());
    const resetBtn = createAndAppend("button", "Reset", () => resetNumber());
    const minusBtn = createAndAppend("button", "-", () => decrementNumber());
    const inputElement = createAndAppend("input", "", null, "number");

    inputElement.value = number;
    inputElement.placeholder = "Enter a number";
    inputElement.addEventListener("input", () => {
        const inputValue = parseInt(inputElement.value);
        if (!isNaN(inputValue)) {
            number = inputValue;
            updateDisplay();
        }
    });

    minusBtn.disabled = number < 2;
    plusBtn.disabled = number >= 10;
    h3Element.style.color = number >= 5 ? "green" : "red";
}

function createAndAppend(tagName, text = '', clickHandler = null, type = '') {
    const element = document.createElement(tagName);
    element.textContent = text;
    if (clickHandler) {
        element.addEventListener("click", clickHandler);
    }
    if (type) {
        element.type = type;
    }
    numbersDiv.appendChild(element);
    return element;
}

function incrementNumber() {
    if (number < 10) {
        number++;
        updateDisplay();
    }
}

function decrementNumber() {
    if (number > 1) {
        number--;
        updateDisplay();
    }
}

function resetNumber() {
    number = 5;
    updateDisplay();
}

updateDisplay();