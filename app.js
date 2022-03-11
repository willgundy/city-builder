// import functions and grab DOM elements

//get images
const regionImageEl = document.getElementById('region-image');
const typeImageEl = document.getElementById('type-image');
const sizeImageEl = document.getElementById('size-image');

//get selectors
const regionSelectorEl = document.getElementById('region');
const typeSelectorEl = document.getElementById('type');
const sizeSelectorEl = document.getElementById('size');

//get text and input elements
const sloganInputEl = document.getElementById('slogan-input');
const sloganTextEl = document.getElementById('sloganText');
const changeCounterTextEl = document.getElementById('changeCounter');
const sloganButtonEl = document.getElementById('slogan-button');

// let state
let regionChangeCount = 0;
let typeChangeCount = 0;
let sizeChangeCount = 0;

const slogans = [];

// set event listeners 

regionSelectorEl.addEventListener('change', () => {
    regionImageEl.src = 'assets/' + regionSelectorEl.value + '.png';

    regionChangeCount++;
    updateChangeText();
});

typeSelectorEl.addEventListener('change', () => {
    typeImageEl.src = 'assets/' + typeSelectorEl.value + '.png';

    typeChangeCount++;
    updateChangeText();
});

sizeSelectorEl.addEventListener('change', () => {
    sizeImageEl.src = 'assets/' + sizeSelectorEl.value + '.png';

    sizeChangeCount++;
    updateChangeText();
});

sloganButtonEl.addEventListener('click', () => {
    slogans.push(sloganInputEl.value);
    
    sloganInputEl.value = '';

    displaySlogans();
});


function updateChangeText() {
    changeCounterTextEl.textContent = 'You have changed your mind on region ' + regionChangeCount + ' times, terrain type '
        + typeChangeCount + ' times, and city size ' + sizeChangeCount + ' times.';
}

function displaySlogans() {
    sloganTextEl.innerHTML = '';

    for (let slogan of slogans) {
        const sloganEl = document.createElement('p');
        sloganEl.textContent = slogan;
        sloganTextEl.append(sloganEl);
    }
}