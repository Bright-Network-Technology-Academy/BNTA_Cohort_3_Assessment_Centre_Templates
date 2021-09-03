// List all your products here that you have included inside your HTML
let product1 = {
  img: "image source here",
  product: "product1",
  price: 3.99,
};

// let product2 ...

// let product3 ...

// Declare a product button that relates to the relevant HTML element inside index.html.
let productButton = document.getElementById("addProductToBasket");

// Declare an empty array to store all items added to your basket.
let basket = [];

// Write a function that dynamically updates to number of items in the basket inside your HTML.
function updateHTML() {
  document.getElementById("basketNum").innerHTML = `(${basket.length})`;
}

// Write function to add an item to your basket
function addToBasket(app) {
  basket.push(app);
  updateHTML();
}

// Write function to remove an item to your basket
function removeItem(index) {
  basket.splice(index, 1);
  updateHTML();
}

// Add event listener to all buttons with the addToBasket id.
productButton.addEventListener("click", function () {
  addToBasket(product);
});
