// Bookstore Management System

// Define an array called inventory containing several objects, each representing a book in the bookstore's inventory. Each book object should have properties such as id, title, author, price, quantity, and any other relevant details.

let inventory = [];

// Create a class called Book to represent a book
class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
}

// Function to add a book to the inventory
function addBook(id, title, author, price, quantity) {
    let book = new Book(id, title, author, price, quantity);
    inventory.push(book);
}

// Adding books to the inventory
addBook(1, "The Great Gatsby", "F. Scott Fitzgerald", 10.99, 5);
addBook(2, "1984", "George Orwell", 8.99, 10);
addBook(3, "To Kill a Mockingbird", "Harper Lee", 12.99, 7);
addBook(4, "Pride and Prejudice", "Jane Austen", 9.99, 3);

// updateBook the inventory;
function updateBook(price, id) {

    for (let i in inventory) {
        if (inventory[i].id===id){
            inventory[i].price = price
        }
    }
};
updateBook(565,1);
updateBook(897,2);
console.log(inventory)

// removeBook the inventory;
function removeBook(id) {
   inventory = inventory.filter((removeDate)=> removeDate.id!==id)
}
removeBook(1);
removeBook(2);
removeBook(3);
console.log(inventory);

// displayBook the inventory;
function displayBook() {
    for ( let i in inventory) {
        console.log(`${inventory[i].title} - ${inventory[i].price}(${inventory[i].quantity})`)
    }
};
displayBook()
