// Inventory Management System:
// Define an array called inventory containing several objects, each representing a product in the store's inventory. Each object should have properties such as id, name, price, quantity, and any other relevant details.
let inventory = [];

// Create a class called Product to represent a product, and use this class to create objects for each product in the inventory array.
class Product {  
    constructor(id, name, price, quantity, brand) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.brand = brand;
    }
}

const addProduct = function(id, name, price, quantity, brand) {
    let product = new Product(id, name, price, quantity, brand);
    inventory.push(product);
};

// Adding products to inventory
addProduct(1, "Laptop", 1200, 10, "HP");
addProduct(2, "Smartphone", 800, 15, "Samsung");
addProduct(3, "Headphone", 100, 30, "Sony");
addProduct(4, "Tablet", 500, 8, "Apple");
addProduct(5, "Printer", 300, 5, "Canon");

// Define functions to manage the inventory

function updateProduct(id, quantity) {
    for (let product of inventory) {
        if (product.id === id) {
            product.quantity = quantity;
            break;
        }
    }
}

function removeProduct(id) {
    inventory = inventory.filter(product => product.id !== id);
}

function displayProducts() {
    for (let product of inventory) {
        console.log(`${product.name} - ${product.price} (${product.quantity})`);
    }
}

// Example usage of update and remove functions
updateProduct(1, 78);
updateProduct(2, 89);
updateProduct(3, 34);
updateProduct(4, 45);
updateProduct(5, 56);

removeProduct(1);
removeProduct(5);

// Display all products
displayProducts();

// Define expenses array for displayExpenses function
let expenses = [
    { name: "Rent", amount: 1000, date: "2024-07-01" },
    { name: "Utilities", amount: 200, date: "2024-07-05" }
];

function displayExpenses() {
    for (let expense of expenses) {
        console.log(`${expense.name} - ${expense.amount} (${expense.date})`);
    }
}

// Call the function to display expenses
displayExpenses();

