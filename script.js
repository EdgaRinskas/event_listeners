console.log('event listeners');

const numbersDiv = document.getElementById('numbers');
const h3Element = document.createElement('h3');
h3Element.textContent = '5';

const plusButton = createButton('+');
const minusButton = createButton('-');
const plus2Button = createButton('+2');
const minus2Button = createButton('-2');
const resetButton = createButton('Reset');
const addScoreButton = createButton('Enter number');

let score = 5;

function updateUI() {
    h3Element.textContent = score.toString();

    if (score < 2) {
        disableButton(minusButton);
        disableButton(minus2Button);
    } else {
        enableButton(minusButton);
        enableButton(minus2Button);
    }

    if (score === 10 || score === 9) {
        disableButton(plusButton);
        disableButton(plus2Button);
    } else {
        enableButton(plusButton);
        enableButton(plus2Button);
    }

    h3Element.style.color = score >= 5 ? 'green' : 'red';
}

function createButton(text) {
    const button = document.createElement('button');
    button.textContent = text;
    return button;
}

function disableButton(button) {
    button.setAttribute('disabled', true);
}

function enableButton(button) {
    button.removeAttribute('disabled');
}

plusButton.addEventListener('click', function () {
    if (score < 10) {
        score++;
        updateUI();
    }
});

plus2Button.addEventListener('click', function () {
    if (score < 9) {
        score += 2;
        updateUI();
    }
});

minusButton.addEventListener('click', function () {
    if (score > 1) {
        score--;
        updateUI();
    }
});

minus2Button.addEventListener('click', function () {
    if (score > 1) {
        score -= 2;
        updateUI();
    }
});

resetButton.addEventListener('click', function () {
    score = 5;
    input1.value = '';
    updateUI();
});

const input1 = document.createElement('input');
input1.type = 'number';
input1.id = 'input1';

input1.addEventListener('change', function () {
    const newScore = parseInt(input1.value);
    if (!isNaN(newScore)) {
        score = newScore;
        updateUI();
    }
});

const h4Element = document.createElement('h4');
h4Element.textContent = 'Grade:';

const ulElement = document.createElement('ul');

addScoreButton.addEventListener('click', function () {
    const scoreInput = parseInt(prompt('Enter a score:'));
    if (!isNaN(scoreInput)) {
        const liElement = document.createElement('li');
        liElement.textContent = scoreInput.toString();
        liElement.style.color = h3Element.style.color;

        const deleteButton = createButton('Delete');
        deleteButton.addEventListener('click', function () {
            ulElement.removeChild(liElement);
        });

        liElement.appendChild(deleteButton);
        ulElement.insertBefore(liElement, ulElement.firstChild);
    }
});

numbersDiv.appendChild(h3Element);
numbersDiv.appendChild(plusButton);
numbersDiv.appendChild(minusButton);
numbersDiv.appendChild(plus2Button);
numbersDiv.appendChild(minus2Button);
numbersDiv.appendChild(resetButton);
numbersDiv.appendChild(input1);
numbersDiv.appendChild(h4Element);
numbersDiv.appendChild(ulElement);
numbersDiv.appendChild(addScoreButton);

updateUI();
console.groupEnd();