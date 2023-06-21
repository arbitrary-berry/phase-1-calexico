// Global constants
const URL = 'http://localhost:3000/menu'

// DOM Selectors
const menu = document.querySelector('#menu-items')
// Fetch functions
function getAllDishes(url) {
    return fetch(url)
        .then(res => res.json())
}

// Event listeners

// Event handlers

// Render functions
function renderInMenu(dishObj){
    const span = document.createElement("span");
    span.textContent = dishObj.name;
    menu.append(span)
}

// Intializers
getAllDishes(URL)
 .then(dishArr => {
    dishArr.forEach(renderInMenu);
 })