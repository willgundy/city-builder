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
const sloganResetButtonEl = document.getElementById('slogan-reset-button');
const cityNameHeaderEl = document.getElementById('cityNameHeader');
const cityNameButtonEl = document.getElementById('name-button');
const cityNamePEl = document.getElementById('cityNameP');
const cityDescriptionEl = document.getElementById('cityDescription');

//hidden sections on load
const textContainer = document.getElementById('text-container');
const buttonContainer = document.getElementById('button-container');
const addTripButton = document.getElementById('addtripbtn');
const tripTable = document.getElementById('tripTable');
const mainHeaderEl = document.getElementById('mainHeader');

// let state
let regionChangeCount = 0;
let typeChangeCount = 0;
let sizeChangeCount = 0;

let slogans = [];

// set event listeners 

addTripButton.addEventListener('mouseover', () => {
    addTripButton.classList.add('addtripbtn-hover');
});

addTripButton.addEventListener('mouseout', () => {
    addTripButton.classList.remove('addtripbtn-hover');
});

addTripButton.addEventListener('click', () => {
    addRowToTripTable();
    resetPageAfterCitySelected();
});

function addRowToTripTable() {
    const exampleCity = cities.city[Number(regionSelectorEl.value) + Number(typeSelectorEl.value) + Number(sizeSelectorEl.value)];
    const newRow = tripTable.insertRow(-1);
    newRow.insertCell(0).innerHTML = nameInputEl.value;
    newRow.insertCell(1).innerHTML = exampleCity.regions;
    newRow.insertCell(2).innerHTML = exampleCity.type;
    newRow.insertCell(3).innerHTML = exampleCity.size;
    tripTable.classList.remove('hidden');
}

function resetPageAfterCitySelected() {
    regionSelectorEl.value = sizeSelectorEl.value = typeSelectorEl.value = 'default';
    regionImageEl.src = typeImageEl.src = sizeImageEl.src = 'assets/Solid_white.png';
    textContainer.classList.add('hidden');
    buttonContainer.classList.add('hidden');
    cityDescriptionEl.innerHTML = '';
    mainHeaderEl.innerHTML = 'Choose Another Location for your Trip!';
}

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

sloganResetButtonEl.addEventListener('click', () => {
    resetSlogans();
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
    restCityName();
    cityNameHeaderEl.innerHTML = exampleCity.name;
    nameInputEl.value = exampleCity.name;
    cityDescriptionEl.innerHTML = 'We think you would like ' + exampleCity.name + '. It is a ' + exampleCity.size + ' in the ' +
    exampleCity.regions + ' of the USA surrounded by ' + exampleCity.type + '.';
}

function resetSlogans() {
    slogans = [];
    sloganInputEl.value = '';
    sloganTextEl.innerHTML = '';
}

function restCityName() {
    cityNameHeaderEl.innerHTML = '';
    nameInputEl.value = '';
}

function revealAllDOMElements() {
    buttonContainer.classList.remove('hidden');
    textContainer.classList.remove('hidden');
}

//couldn't figure out how to import an object, functions worked fine. Had to put directly in app.js file
let cities = {
    city: [
        { id: 0, name: 'New York City', slogans: ['slogan 1'], regions: 'Northeast', type: 'Desert', size: 'Big City', regionId: 0, typeId: 0, sizeId: 0 },
        { id: 1, name: 'Richmond', slogans: ['slogan 2'], regions: 'Northeast', type: 'Desert', size: 'Small City', regionId: 0, typeId: 0, sizeId: 1 },
        { id: 2, name: 'Gretna', slogans: ['slogan 3'], regions: 'Northeast', type: 'Desert', size: 'Town', regionId: 0, typeId: 0, sizeId: 2 },
        { id: 3, name: 'Boston', slogans: ['slogan 4'], regions: 'Northeast', type: 'Forest', size: 'Big City', regionId: 0, typeId: 3, sizeId: 0 },
        { id: 4, name: 'Syracuse', slogans: ['slogan 5'], regions: 'Northeast', type: 'Forest', size: 'Small City', regionId: 0, typeId: 3, sizeId: 1 },
        { id: 5, name: 'Jasper', slogans: ['slogan 6'], regions: 'Northeast', type: 'Forest', size: 'Town', regionId: 0, typeId: 3, sizeId: 2 },
        { id: 6, name: 'Pittsburgh', slogans: ['slogan 7'], regions: 'Northeast', type: 'Mountain', size: 'Big City', regionId: 0, typeId: 6, sizeId: 0 },
        { id: 7, name: 'Harrisburg', slogans: ['slogan 8'], regions: 'Northeast', type: 'Mountain', size: 'Small City', regionId: 0, typeId: 6, sizeId: 1 },
        { id: 8, name: 'Hanover', slogans: ['slogan 9'], regions: 'Northeast', type: 'Mountain', size: 'Town', regionId: 0, typeId: 6, sizeId: 2 },
        { id: 9, name: 'Jackson', slogans: ['slogan 10'], regions: 'South', type: 'Desert', size: 'Big City', regionId: 9, typeId: 0, sizeId: 0 },
        { id: 10, name: 'Alexandria', slogans: ['slogan 11'], regions: 'South', type: 'Desert', size: 'Small City', regionId: 9, typeId: 0, sizeId: 1 },
        { id: 11, name: 'Ferriday', slogans: ['slogan 12'], regions: 'South', type: 'Desert', size: 'Town', regionId: 9, typeId: 0, sizeId: 2 },
        { id: 12, name: 'Nashville', slogans: ['slogan 13'], regions: 'South', type: 'Forest', size: 'Big City', regionId: 9, typeId: 3, sizeId: 0 },
        { id: 13, name: 'Asheville', slogans: ['slogan 14'], regions: 'South', type: 'Forest', size: 'Small City', regionId: 9, typeId: 3, sizeId: 1 },
        { id: 14, name: 'Potts Camp', slogans: ['slogan 15'], regions: 'South', type: 'Forest', size: 'Town', regionId: 9, typeId: 3, sizeId: 2 },
        { id: 15, name: 'Charlotte', slogans: ['slogan 16'], regions: 'South', type: 'Mountain', size: 'Big City', regionId: 9, typeId: 6, sizeId: 0 },
        { id: 16, name: 'Knoxville', slogans: ['slogan 17'], regions: 'South', type: 'Mountain', size: 'Small City', regionId: 9, typeId: 6, sizeId: 1 },
        { id: 17, name: 'Abingdon', slogans: ['slogan 18'], regions: 'South', type: 'Mountain', size: 'Town', regionId: 9, typeId: 6, sizeId: 2 },
        { id: 18, name: 'Omaha', slogans: ['slogan 19'], regions: 'Midwest', type: 'Desert', size: 'Big City', regionId: 18, typeId: 0, sizeId: 0 },
        { id: 19, name: 'Rapid City', slogans: ['slogan 20'], regions: 'Midwest', type: 'Desert', size: 'Small City', regionId: 18, typeId: 0, sizeId: 1 },
        { id: 20, name: 'Edgemont', slogans: ['slogan 21'], regions: 'Midwest', type: 'Desert', size: 'Town', regionId: 18, typeId: 0, sizeId: 2 },
        { id: 21, name: 'Minneapolis', slogans: ['slogan 22'], regions: 'Midwest', type: 'Forest', size: 'Big City', regionId: 18, typeId: 3, sizeId: 0 },
        { id: 22, name: 'Madison', slogans: ['slogan 23'], regions: 'Midwest', type: 'Forest', size: 'Small City', regionId: 18, typeId: 3, sizeId: 1 },
        { id: 23, name: 'Osceola', slogans: ['slogan 24'], regions: 'Midwest', type: 'Forest', size: 'Town', regionId: 18, typeId: 3, sizeId: 2 },
        { id: 24, name: 'Literally None', slogans: ['There are no mountains in the midwest'], regions: 'Midwest', type: 'Mountain', size: 'Big City', regionId: 18, typeId: 6, sizeId: 0 },
        { id: 25, name: 'Rapid City', slogans: ['slogan 26'], regions: 'Midwest', type: 'Mountain', size: 'Small City', regionId: 18, typeId: 6, sizeId: 1 },
        { id: 26, name: 'Deadwood', slogans: ['slogan 27'], regions: 'Midwest', type: 'Mountain', size: 'Town', regionId: 18, typeId: 6, sizeId: 2 },
        { id: 27, name: 'Phoenix', slogans: ['Chain restaurant city'], regions: 'West', type: 'Desert', size: 'Big City', regionId: 27, typeId: 0, sizeId: 0 },
        { id: 28, name: 'Palm Springs', slogans: ['Old people city'], regions: 'West', type: 'Desert', size: 'Small City', regionId: 27, typeId: 0, sizeId: 1 },
        { id: 29, name: 'Flagstaff', slogans: ['So much better than Phoenix city'], regions: 'West', type: 'Desert', size: 'Town', regionId: 27, typeId: 0, sizeId: 2 },
        { id: 30, name: 'Portland', slogans: ['Rose City', 'Best City', 'Stumptown', 'SCUSA'], regions: 'West', type: 'Forest', size: 'Big City', regionId: 27, typeId: 3, sizeId: 0 },
        { id: 31, name: 'Redding', slogans: ['Its hot as hell city'], regions: 'West', type: 'Forest', size: 'Small City', regionId: 27, typeId: 3, sizeId: 1 },
        { id: 32, name: 'Arcata', slogans: ['Dont tell people about us, its nice here city'], regions: 'West', type: 'Forest', size: 'Town', regionId: 27, typeId: 3, sizeId: 2 },
        { id: 33, name: 'Seattle', slogans: ['the worst city', 'sold out to Amazon city'], regions: 'West', type: 'Mountain', size: 'Big City', regionId: 27, typeId: 6, sizeId: 0 },
        { id: 34, name: 'Reno', slogans: ['biggest little city'], regions: 'West', type: 'Mountain', size: 'Small City', regionId: 27, typeId: 6, sizeId: 1 },
        { id: 35, name: 'Tahoe City', slogans: ['there is a lake that high up! city'], regions: 'West', type: 'Mountain', size: 'Town', regionId: 27, typeId: 6, sizeId: 2 },
    ]
};