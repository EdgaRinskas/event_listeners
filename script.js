console.log('evet listeners');
const numbersDiv = document.getElementById('numbers');
const h3Element = document.createElement('h3');
h3Element.textContent = '5';

const plusButton = document.createElement('button');
plusButton.textContent = '+';
const minusButton = document.createElement('button');
minusButton.textContent = '-';
let score = 5;

function updateUI() {
    h3Element.textContent = score.toString();
    if (score < 2) {
        minusButton.setAttribute('disabled', true);
        minusButton.removeAttribute('disabled');
    }
    if (score === 10) {
        plusButton.setAttribute('disabled', true);
    } else {
        plusButton.removeAttribute('disabled');
    }
    h3Element.style.color = score >= 5 ? 'green' : 'red';
}
plusButton.addEventListener('click', function () {
    if (score < 10) {
        score++;
        updateUI();
    }
});
plusButton.addEventListener('click', function () {
    if (score < 10) {
        score++;
        updateUI();
    }
});
minusButton.addEventListener('click', function () {
    if (score > 1) {
        score--;
        updateUI();
    }
});
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset';
resetButton.addEventListener('click', function () {
    score = 5;
    updateUI();
});
const input1 = document.createElement('input');
input1.type = 'number';
input1.id = 'input';
input1.addEventListener('change', function () {
    const newScore = parseInt(input1.value);
    if (!isNaN(newScore)) {
        score = newScore;
        updateUI();
    }
});
const input2 = document.createElement('input');
input2.type = 'number';
input2.id = 'input2';
input2.addEventListener('change', function () {
    const newScore = parseInt(input2.value);
    if (!isNaN(newScore)) {
        score = newScore;
        updateUI();
    }
});
const h4Element = document.createElement('h4');
h4Element.textContent = 'Balai:';

const ulElement = document.createElement('ul');

const addScoreButton = document.createElement('button');
addScoreButton.textContent = 'Įrašyti balą';
addScoreButton.addEventListener('click', function () {
    score--;
    updateUI();

    const liElement = document.createElement('li');
    liElement.textContent = score.toString();
    liElement.style.color = h3Element.style.color;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        ulElement.removeChild(liElement);
    });
    liElement.appendChild(deleteButton);
    ulElement.insertBefore(liElement, ulElement.firstChild);
});

numbersDiv.appendChild(h3Element);
numbersDiv.appendChild(plusButton);
numbersDiv.appendChild(resetButton);
numbersDiv.appendChild(minusButton);
numbersDiv.appendChild(input1);
numbersDiv.appendChild(input2);
numbersDiv.appendChild(h4Element);
numbersDiv.appendChild(ulElement);
numbersDiv.appendChild(addScoreButton);

updateUI();
console.groupEnd();