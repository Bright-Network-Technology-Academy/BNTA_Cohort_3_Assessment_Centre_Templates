// List all your products here that you have included inside your HTML
let product1 = {
  img: "image source here",
  product: "product1",
  price: 3.99,
};

// let product2 ...

// let product3 ...

// Declare an add product button that relates to the relevant HTML element inside index.html.
let addProductButton = document.getElementById("addProductToBasket");

// Declare a remove product button that relates to the relevant HTML element inside index.html.
let removeProductButton = document.getElementById("removeProductFromBasket");

// Declare an empty array to store all items added to your basket.
let basket = [];

// Write a function that dynamically updates to number of items in the basket inside your HTML.
function updateHTML() {
  document.getElementById("basketNum").innerHTML = `(${basket.length})`;
}

// Write function to add an item to your basket
function addProductToBasket(product) {
  basket.push(product);
  updateHTML();
}

// Write function to remove an item to your basket
function removeProductFromBasket(index) {
  basket.splice(index, 1);
  updateHTML();
}

// Add event listener to all buttons with the addProductToBasket id.
addProductButton.addEventListener("click", () => {
  addToBasket(product1);
});

// Add event listener to all buttons with the removeProductFromBasket id.
removeProductButton.addEventListener("click", () => {
  removeProductFromBasket(basket[-1]);
});
