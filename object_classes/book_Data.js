class Book {

    constructor( title, author, publisher, year, genre ) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
    };
    
    describe() {
        console.log(`" Five Point Someone - ${this.title}, "( ${this.author})".`)
    };
    
    displayGenre() {
        console.log(`" Genre :${this.genre}"`)
    };
};
classic_book = new Book( "Pride and Prejudice", "Jane Austen", "T. Egerton, Whitehall", 1813, "Romantic fiction" );
console.log(classic_book);

sci_fi_book =  new Book( "Dune", "Frank Herbert", "Chilton Books", 1965, "Science Fiction" );
console.log( sci_fi_book );

classic_book.describe();

sci_fi_book.displayGenre();
