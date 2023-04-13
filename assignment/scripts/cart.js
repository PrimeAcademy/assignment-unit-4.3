console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

const maxItems = 5;
let basket = [];

function addItem (item) {
    if (isFull()) {
        return false;
    }
    basket.push(item);
    return true;
}

console.log(addItem('any item'));
addItem('another item');
console.log(basket);

function listItems (){
    for(let item of basket ){
        console.log(item);
    }
}

listItems();

function empty() {
    basket = [];
}

empty();
console.log(basket);

//strech goals


function isFull(){
if(basket.length < maxItems){
    return false;
}
return true;
}

console.log(isFull());

console.log(addItem('a'));
console.log(addItem('b'));
console.log(addItem('c'));
console.log(addItem('d'));
console.log(addItem('e'));
console.log(addItem('f'));
console.log(addItem('g'));
console.log(addItem('h'));

console.log(basket);

function removeItem(item) {
    let index = basket.indexOf(item);
    console.log(index);
    if (index > -1) {
        basket.splice(index, 1);
        return item;
    }
    return null;
}

console.log(removeItem('b'));
console.log(basket);
console.log(removeItem('w'));
console.log(basket);