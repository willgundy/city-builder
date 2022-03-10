// import functions and grab DOM elements
//get containers
const imageContainerEl = document.getElementById('imageContainer');
const selectorContainerEl = document.getElementById('selectorContainer');
const textContainerEl = document.getElementById('textContainer');

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

// let state
let regionChangeCount = 0;
let typeChangeCount = 0;
let sizeChangeCount = 0;

// set event listeners 

regionSelectorEl.addEventListener('change', () => {
    regionImageEl.src = 'assets/' + regionSelectorEl.value + '.png';
});

typeSelectorEl.addEventListener('change', () => {
    typeImageEl.src = 'assets/' + typeSelectorEl.value + '.png';
});

sizeSelectorEl.addEventListener('change', () => {
    sizeImageEl.src = 'assets/' + sizeSelectorEl.value + '.png';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
