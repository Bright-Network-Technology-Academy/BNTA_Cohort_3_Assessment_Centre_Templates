// Declare a variable to contain a product on your e-commerce page.
let product = {
  product: "product",
};

// Declare an add product button that relates to the relevant HTML element inside index.html.
let addProduct1Button = document.getElementById("addProduct1ToBasket");
let addProduct2Button = document.getElementById("addProduct2ToBasket");
let addProduct3Button = document.getElementById("addProduct3ToBasket");

// Declare a remove product button that relates to the relevant HTML element inside index.html.
let removeProduct1Button = document.getElementById("removeProduct1FromBasket");
let removeProduct2Button = document.getElementById("removeProduct2FromBasket");
let removeProduct3Button = document.getElementById("removeProduct3FromBasket");

// Declare an empty array to store all items added to your basket.
let basket = [];

// Write a function that dynamically updates to number of items in the basket inside your HTML.
function updateHTML() {
  document.getElementById("basketNum").innerHTML = `(${basket.length})`;
}

// Write function to add an item to your basket
function addProductToBasket(product) {
  // CODING_TASK_9: Below this line write the code that will take the product
  // parameter and add it to your pages basket. Make sure you reflect the 
  // number of items in your basket on your page.
  
  //ENTER CODE HERE

  updateHTML();
}

// Write function to remove an item to your basket
function removeProductFromBasket(index) {
  // CODING_TASK_10: Below this line write the code that will take the index
  // parameter and use it to remove the selected item from your pages basket.
  // Make sure you reflect the number of items in your basket on your page.
  
  //ENTER CODE HERE

  updateHTML();
}

// Add event listener to all buttons with the addProductToBasket id<.
addProduct1Button.addEventListener("click", () => {
  addProductToBasket(product);
});
addProduct2Button.addEventListener("click", () => {
  addProductToBasket(product);
});
addProduct3Button.addEventListener("click", () => {
  addProductToBasket(product);
});
// Add event listener to all buttons with the removeProductFromBasket id to remove last item in basket.
removeProduct1Button.addEventListener("click", () => {
  removeProductFromBasket((basket.length)-1);
});
removeProduct2Button.addEventListener("click", () => {
  removeProductFromBasket((basket.length)-1);
});
removeProduct3Button.addEventListener("click", () => {
  removeProductFromBasket((basket.length)-1);
});
