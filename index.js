// Global constants
const URL = 'http://localhost:3000/menu'

// DOM Selectors
const menu = document.querySelector('#menu-items');
const dishImage = document.querySelector('#dish-name');
const dishName = document.querySelector('#dish-name');
const dishDescription = document.querySelector('#dish-price');
const numberInCart = document.querySelector('#number-in-cart')

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

function renderDetail(dishObj){
    dishImage.src = dishObj.dish
    dishName.textContent = dishObj.name
    dishDescription.textContent = dishObj.description
    dishPrice.textContent = dishObj.price
    numberInCart.textContent = dishObj.number_in_bag
}

// Intializers
getAllDishes(URL)
 .then(dishArr => {
    dishArr.forEach(renderInMenu);
 })