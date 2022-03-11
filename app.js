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
const nameInputEl = document.getElementById('name-input');
const sloganTextEl = document.getElementById('sloganText');
const changeCounterTextEl = document.getElementById('changeCounter');
const sloganButtonEl = document.getElementById('slogan-button');
const cityNameHeaderEl = document.getElementById('cityNameHeader');
const cityNameButtonEl = document.getElementById('name-button');
const cityNamePEl = document.getElementById('cityNameP');

//hidden sections on load
const textContainer = document.getElementById('text-container');
const buttonContainer = document.getElementById('button-container');

// let state
let regionChangeCount = 0;
let typeChangeCount = 0;
let sizeChangeCount = 0;

let slogans = [];

// set event listeners 

regionSelectorEl.addEventListener('change', () => {
    regionImageEl.src = 'assets/region-' + regionSelectorEl.value + '.png';

    regionChangeCount++;
    updateChangeText();
    if (typeSelectorEl.value !== 'default' && regionSelectorEl.value !== 'default' && sizeSelectorEl.value !== 'default') {
        findExampleCity();
        revealAllDOMElements();
    }
});

typeSelectorEl.addEventListener('change', () => {
    typeImageEl.src = 'assets/type-' + typeSelectorEl.value + '.png';

    typeChangeCount++;
    updateChangeText();
    if (typeSelectorEl.value !== 'default' && regionSelectorEl.value !== 'default' && sizeSelectorEl.value !== 'default') {
        findExampleCity();
        revealAllDOMElements();
    }
});

sizeSelectorEl.addEventListener('change', () => {
    sizeImageEl.src = 'assets/size-' + sizeSelectorEl.value + '.png';

    sizeChangeCount++;
    updateChangeText();
    if (typeSelectorEl.value !== 'default' && regionSelectorEl.value !== 'default' && sizeSelectorEl.value !== 'default') {
        findExampleCity();
        revealAllDOMElements();
    }
});

sloganButtonEl.addEventListener('click', () => {
    slogans.push(sloganInputEl.value);
    
    sloganInputEl.value = '';

    displaySlogans();
});

cityNameButtonEl.addEventListener('click', () => {
    cityNameHeaderEl.textContent = nameInputEl.value;
    cityNamePEl.classList.remove('hidden');
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

function findExampleCity() {
    const exampleCity = cities.city[Number(regionSelectorEl.value) + Number(typeSelectorEl.value) + Number(sizeSelectorEl.value)];
    const exampleCitySlogans = exampleCity.slogans;
    resetSlogans();
    for (let slogan of exampleCitySlogans) {
        slogans.push(slogan);
    }
    displaySlogans();
}

function resetSlogans() {
    slogans = [];
    sloganInputEl.value = '';
    sloganTextEl.innerHTML = '';
}

function restCityName() {

}

function revealAllDOMElements() {
    buttonContainer.classList.remove('hidden');
    textContainer.classList.remove('hidden');
}

//couldn't figure out how to import an object, functions worked fine. Had to put directly in app.js file
let cities = {
    city: [
        { id: 0, name: 'test 1', slogans: ['slogan 1'], regions: 'northeast', type: 'desert', size: 'big-city', regionId: 0, typeId: 0, sizeId: 0 },
        { id: 1, name: 'test 2', slogans: ['slogan 2'], regions: 'northeast', type: 'desert', size: 'small-city', regionId: 0, typeId: 0, sizeId: 1 },
        { id: 2, name: 'test 3', slogans: ['slogan 3'], regions: 'northeast', type: 'desert', size: 'town', regionId: 0, typeId: 0, sizeId: 2 },
        { id: 3, name: 'test 4', slogans: ['slogan 4'], regions: 'northeast', type: 'forest', size: 'big-city', regionId: 0, typeId: 3, sizeId: 0 },
        { id: 4, name: 'test 5', slogans: ['slogan 5'], regions: 'northeast', type: 'forest', size: 'small-city', regionId: 0, typeId: 3, sizeId: 1 },
        { id: 5, name: 'test 6', slogans: ['slogan 6'], regions: 'northeast', type: 'forest', size: 'town', regionId: 0, typeId: 3, sizeId: 2 },
        { id: 6, name: 'test 7', slogans: ['slogan 7'], regions: 'northeast', type: 'mountain', size: 'big-city', regionId: 0, typeId: 6, sizeId: 0 },
        { id: 7, name: 'test 8', slogans: ['slogan 8'], regions: 'northeast', type: 'mountain', size: 'small-city', regionId: 0, typeId: 6, sizeId: 1 },
        { id: 8, name: 'test 9', slogans: ['slogan 9'], regions: 'northeast', type: 'mountain', size: 'town', regionId: 0, typeId: 6, sizeId: 2 },
        { id: 9, name: 'test 10', slogans: ['slogan 10'], regions: 'south', type: 'desert', size: 'big-city', regionId: 9, typeId: 0, sizeId: 0 },
        { id: 10, name: 'test 11', slogans: ['slogan 11'], regions: 'south', type: 'desert', size: 'small-city', regionId: 9, typeId: 0, sizeId: 1 },
        { id: 11, name: 'test 12', slogans: ['slogan 12'], regions: 'south', type: 'desert', size: 'town', regionId: 9, typeId: 0, sizeId: 2 },
        { id: 12, name: 'test 13', slogans: ['slogan 13'], regions: 'south', type: 'forest', size: 'big-city', regionId: 9, typeId: 3, sizeId: 0 },
        { id: 13, name: 'test 14', slogans: ['slogan 14'], regions: 'south', type: 'forest', size: 'small-city', regionId: 9, typeId: 3, sizeId: 1 },
        { id: 14, name: 'test 15', slogans: ['slogan 15'], regions: 'south', type: 'forest', size: 'town', regionId: 9, typeId: 3, sizeId: 2 },
        { id: 15, name: 'test 16', slogans: ['slogan 16'], regions: 'south', type: 'mountain', size: 'big-city', regionId: 9, typeId: 6, sizeId: 0 },
        { id: 16, name: 'test 17', slogans: ['slogan 17'], regions: 'south', type: 'mountain', size: 'small-city', regionId: 9, typeId: 6, sizeId: 1 },
        { id: 17, name: 'test 18', slogans: ['slogan 18'], regions: 'south', type: 'mountain', size: 'town', regionId: 9, typeId: 6, sizeId: 2 },
        { id: 18, name: 'test 19', slogans: ['slogan 19'], regions: 'midwest', type: 'desert', size: 'big-city', regionId: 18, typeId: 0, sizeId: 0 },
        { id: 19, name: 'test 20', slogans: ['slogan 20'], regions: 'midwest', type: 'desert', size: 'small-city', regionId: 18, typeId: 0, sizeId: 1 },
        { id: 20, name: 'test 21', slogans: ['slogan 21'], regions: 'midwest', type: 'desert', size: 'town', regionId: 18, typeId: 0, sizeId: 2 },
        { id: 21, name: 'test 22', slogans: ['slogan 22'], regions: 'midwest', type: 'forest', size: 'big-city', regionId: 18, typeId: 3, sizeId: 0 },
        { id: 22, name: 'test 23', slogans: ['slogan 23'], regions: 'midwest', type: 'forest', size: 'small-city', regionId: 18, typeId: 3, sizeId: 1 },
        { id: 23, name: 'test 24', slogans: ['slogan 24'], regions: 'midwest', type: 'forest', size: 'town', regionId: 18, typeId: 3, sizeId: 2 },
        { id: 24, name: 'test 25', slogans: ['slogan 25'], regions: 'midwest', type: 'mountain', size: 'big-city', regionId: 18, typeId: 6, sizeId: 0 },
        { id: 25, name: 'test 26', slogans: ['slogan 26'], regions: 'midwest', type: 'mountain', size: 'small-city', regionId: 18, typeId: 6, sizeId: 1 },
        { id: 26, name: 'test 27', slogans: ['slogan 27'], regions: 'midwest', type: 'mountain', size: 'town', regionId: 18, typeId: 6, sizeId: 2 },
        { id: 27, name: 'test 28', slogans: ['slogan 28'], regions: 'west', type: 'desert', size: 'big-city', regionId: 27, typeId: 0, sizeId: 0 },
        { id: 28, name: 'test 29', slogans: ['slogan 29'], regions: 'west', type: 'desert', size: 'small-city', regionId: 27, typeId: 0, sizeId: 1 },
        { id: 29, name: 'test 30', slogans: ['slogan 30'], regions: 'west', type: 'desert', size: 'town', regionId: 27, typeId: 0, sizeId: 2 },
        { id: 30, name: 'test 31', slogans: ['slogan 31'], regions: 'west', type: 'forest', size: 'big-city', regionId: 27, typeId: 3, sizeId: 0 },
        { id: 31, name: 'test 32', slogans: ['slogan 32'], regions: 'west', type: 'forest', size: 'small-city', regionId: 27, typeId: 3, sizeId: 1 },
        { id: 32, name: 'test 33', slogans: ['slogan 33'], regions: 'west', type: 'forest', size: 'town', regionId: 27, typeId: 3, sizeId: 2 },
        { id: 33, name: 'test 34', slogans: ['slogan 34'], regions: 'west', type: 'mountain', size: 'big-city', regionId: 27, typeId: 6, sizeId: 0 },
        { id: 34, name: 'test 35', slogans: ['slogan 35'], regions: 'west', type: 'mountain', size: 'small-city', regionId: 27, typeId: 6, sizeId: 1 },
        { id: 35, name: 'test 36', slogans: ['slogan 36'], regions: 'west', type: 'mountain', size: 'town', regionId: 27, typeId: 6, sizeId: 2 }
    ]
};