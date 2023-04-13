console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
  if (isFull(maxItems)) {
    return false;
  }
  basket.push(item);
  return basket.includes(item);
}

function listItems() {
  for (let item of basket) {
    console.log(item);
  }
}

function empty() {
  basket = [];
}

console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
console.log(basket);

function isFull(max) {
  return basket.length >= max;
}
console.log(isFull(maxItems), 'should return false');

console.log(isFull(1), 'should return true');

function removeItem(item) {
  if (basket.indexOf(item) === -1) {
    return null;
  }
  let removedItem = basket.splice(basket.indexOf(item));
  return removedItem;
}

console.log(removeItem('apples'));
