console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem(item) {
  if (isFull()) {
    return false;
  }

  basket.push(item);
  return true;
}

function listItems() {
  for (let item of basket) {
    console.log(item);
  }
}

function empty() {
  basket = [];
}

function isFull() {
  return basket.length >= maxItems;
}

function removeItem(item) {
  const itemIndex = basket.indexOf(item);
  if (itemIndex === -1) {
    return null;
  }

  return basket.splice(itemIndex, 1)[0];
}


console.log('Added apple:', addItem('apple'));
console.log('Added banana:', addItem('banana'));
console.log('Added grapes:', addItem('grapes'));
console.log('Added mango:', addItem('mango'));
console.log('Added broccoli:', addItem('broccoli'));

console.log('Basket contains:');
listItems();

console.log('Added cookies:', addItem('cookies'));
console.log('...');

console.log('Removed:', removeItem('broccoli'));
console.log('Removed:', removeItem('brussel sprouts'));

console.log('Basket contains:');
listItems();

console.log('Added cookies:', addItem('cookies'));

console.log('Forgot wallet');
empty();
listItems();
