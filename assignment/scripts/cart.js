console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = []; 

/* function addItem(item) {
    basket.push(item);{
        if(basket.length <= 0) {
            return false;
        }
     return true;}
    } */

 function addItem(item) {
    basket.push(item); 
    return basket.length > 0;
} 

addItem('book');
addItem('bookmark');
addItem('bookcase');
console.log(`Basket is ${basket}`);

console.log(addItem('book')) 
console.log('Adding apples (expect true)', addItem('apples'));

function listItems(){
for (let items of basket){
    console.log(items);
}
}      
listItems();


function emptyBaskets() {
    return basket = [];
}
emptyBaskets();
console.log(`The basket should now be emptied ${basket}`);

//Stretch Goals

const maxItems = 5;
function isFull(limit){
    if (basket.length + limit.length < maxItems){
       console.log(basket, addItem(limit));
        return false;
    }   return true;
}
console.log(isFull(['eggs', 'milk', 'cheese']));
console.log(basket)
console.log(isFull(['eggs', 'milk', 'cheese', 'bacon', 'ham']));
console.log(basket)

// if (isFull(x) === false){
//     addItem(item); 
//   return 'The cart is full' ;

// }


// console.log(isFull(2), addItem('Backpack'))