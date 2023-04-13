console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
  basket.push(item);
  return true;
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
