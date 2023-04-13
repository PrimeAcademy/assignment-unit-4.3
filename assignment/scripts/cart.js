console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// First problem
let basket = [];

const maxItems = 5;
function addItem(item) {
    if (isFull() === true) {
        return false;
    } else {
        basket.push(item);
        return true;
    }
} 
addItem('round');
addItem(' flat');
console.log(`Here is the new basket: ${basket}`);

// Second Problem
function listItems() {
    for (items of basket) {
        console.log(`Here are the items: ${items}`);
    }
}
listItems();

// Third Problem
function empty() {
    basket = [];
}
empty();
console.log(`This basket is now empty: ${basket}`);

// STRETCH
function isFull() {
    if (maxItems <= basket.length) {
    return true;
    } 
    return false;  
}
console.log(isFull());;

