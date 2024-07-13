// Define an array called cart containing several objects, each representing an item in the shopping cart
const cart = [
    {name: "siya", price: 460, quantity: 10},
    {name: "shanti", price: 660, quantity: 5},
    {name: "siya", price: 460, quantity: 10}
];

// Function to calculate the total price of items in the cart
function calculateTotalPrice(cart) {
    let totalPrice = 0;
    
    for (const item of cart) {
        totalPrice += item.price;
    }
    
    return totalPrice;
}

const totalPrice = calculateTotalPrice(cart);
console.log(totalPrice);

// Example inventory array for displayProduct function
const inventory = [
    {name: "product1", price: 100, quantity: 20},
    {name: "product2", price: 150, quantity: 15},
    {name: "product3", price: 200, quantity: 10}
];

// Function to display products in the inventory
function displayProduct() {
    for (const item of inventory) {
        for (const key in item) {
            console.log(key, ":", item[key]);
        }
    }
}

displayProduct();



