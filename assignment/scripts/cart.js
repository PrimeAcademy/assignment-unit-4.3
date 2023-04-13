console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//global variable named basket
let basket = [ ];

// addItem function to add input into the array basket and return true when it is done
function addItem( item ){
    basket.unshift( item );
    return true
}
console.log('Adding peaches (expect true)', addItem('peaches'));
console.log(`Basket is ${basket}`);
addItem('bread')
addItem('eggs')
addItem('beer')
addItem('bacon')


//listItems iterates over the items in the basket array and console logs each item.
function listItems (){
    for (obj of basket) {
        console.log(obj)
    }
} //listItems end

//calling listItems function
listItems()

// a function to empty the basket array
function empty(){
    basket = [];
}
//empty()
console.log(`Basket is now ${basket}`);

//Stretch Goal

const maxItems = 5
//creating function to check if basket is greater than or equal to maxItems
function isFull(){
    if (basket.length >= maxItems){
        return true;
    }
        return false;
}

console.log(`Basket is now ${basket}`)
console.log(isFull())


// function to remove a given item from the basket array
let removeItem = item => basket.splice(basket.indexOf(item),1)

removeItem('beer') // removing beer
console.log(`Basket is now ${basket}`) // testing contents of basket for removed item