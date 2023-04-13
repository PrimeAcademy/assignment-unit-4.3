console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

// Original addItem()
// function addItem(item) {
//     basket.push(item);
//     return true;
// }

// Updated addItem() - stretch goal #3
function addItem(item) {
    if (isFull(basket)) {
        return false;
    }
        basket.push(item);
        return true;
}

console.log(`Expecting empty basket: ${basket}`);
console.log(`Adding a pear, expect to see 'true': ${addItem('pear')}`);
console.log(`Adding a apple, expect to see 'true': ${addItem('apple')}`);
console.log(`Adding a chicken, expect to see 'true': ${addItem('chicken')}`);
console.log(`Adding a salad, expect to see 'true': ${addItem('salad')}`);
console.log(`Adding a bagel, expect to see 'true': ${addItem('bagel')}`);
console.log(`Adding a steak, expect to see 'false': ${addItem('steak')}`);
console.log(`Expecting basket w 5 items: ${basket}`);


function listItems(array) {
    for (x of array) {
        console.log(x);
    }
}
listItems(basket);

// ---------- commenting to test removeItems ---------
// function empty(){
//     return basket = [];
// }

// console.log(`expecting an empty basket array: ${empty()}`);

// Stretch goal #2
function isFull (myBasket) {
    if (myBasket.length < maxItems) {
        return false;  
    }
    return true;
}


// Stretch goal #4
function removeItem(item) {
    if (basket.indexOf(item) < 0) {
        return 'null'
    } 
        return basket.splice(basket.indexOf(item), 1);
}

console.log(`expecting original basket: ${basket}`);
console.log(`testing removeItem with 'pear':  ${removeItem('pear')}`);
console.log(`expecting basket with pear removed: ${basket}`);
console.log(`testing removeItem with 'bagel':  ${removeItem('bagel')}`);
console.log(`basket after removing pear and bagel: ${basket}`);
console.log(`testing removeItem with 'steak', expecting null:  ${removeItem('bagel')}`);
