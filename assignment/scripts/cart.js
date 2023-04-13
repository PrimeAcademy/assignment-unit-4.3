console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//Update the cart.js file to do the following:

//Create a global variable named basket and set it to an empty array.
let basket = ['desk','pen', 'marker'];


//Create a function called addItem. It should:
//take an input parameter for a string item
//add the new item to the global array basket.
//return true indicating the item was added

function addItem (item) {
    basket.push(item);
    return true;
}

console.log(addItem('basketball'));
console.log(basket);

//Create a function called listItems. It should:
//loop over the items in the basket array
//console.log each individual item on a new line


function listItems (array){
    for (const Item of array) {
        console.log(Item);
    }
    }
console.log(listItems(basket));

//Create a function called empty. It should:
//reset the basket to an empty array

// let remove = basket.pop();
// console.log(remove);

function empty(basket) {
    return basket = [];
}

console.log(empty(basket));

// Add a global `const` named `maxItems` and set it to 5.

const maxItems = 5;

// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)

function isFull (array){
    if (array.length < maxItems){
        return false;
    } return true
}
console.log(isFull(basket))

// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`


// function addItem (item) {
//     basket.push(item);
//     return true;

// function addItem(array) {
//     isFull(array)
// }

// console.log(addItem('basketball', 'football', 'hockey'));

// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found

basket = ['phone', 'backpack', 'coffee', 'glasses', 'phone'];

function removeItem (item, array){
    let index = array.indexOf(item)
    let remove = array.splice(index, 1)
    remove.toSting();
    console.log(remove, item);
    if (remove !== item) {
        return null;
    } 
    return [index, item];
}
console.log(removeItem('phone', basket));