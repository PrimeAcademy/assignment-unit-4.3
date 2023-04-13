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

add('book');
add('bookmark');
add('bookcase');
console.log(`Basket is ${basket}`);

 function add(item) {
    basket.push(item); 
    return basket.length > 0;

} 
console.log(add('book')) 
console.log('Adding apples (expect true)', add('apples'));

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
function isFull(basket){
    if (basket < maxItems){
        return false;
    }   return true;
}
console.log(isFull(6));
console.log(isFull(5));
console.log(isFull(1));

