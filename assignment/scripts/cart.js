console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
  if (basket.length < maxItems) {
    basket.push(item);
    return true;
  } else if (basket.length >= maxItems) {
    return false;
  }
}

// test
addItem("shoes");
console.log("added shoes, basket:", basket);
addItem("pants");
console.log("added pants, basket:", basket);

function listItems(basketItems) {
  for (let item of basketItems) {
    console.log(item);
  }
}
listItems(basket);

// empty
function empty() {
  basket = [];
}
empty();
console.log("empty basket:", basket);
// add items
addItem("pants");
// Sretch Goals

// function isFull(){};
const isFull = () => {
  if (basket.length < maxItems) {
    return false;
  } else return true;
};

console.log("Basket", basket, "Max items: 5 is it full", isFull());

addItem("socks");
addItem("shirt");
addItem("bandana");

console.log("Basket", basket, "Max items: 5 is it full", isFull());

addItem("jacket");
console.log(addItem("hat"));
console.log(basket);

// Remove Item
function removeItem(item) {
  let index = basket.indexOf(item);

  if (index !== -1) {
    basket.splice(index, 1);
    return item;
  }
  return null;
}

console.log("remove: ", removeItem("pants"), "new basket: ", basket);
console.log("remove: ", removeItem("blouse"), "new basket: ", basket);
