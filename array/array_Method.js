// a  Define and Initialize the Array:
// Define a variable named numbers and assign it an array containing some numbers (e.g., 1, 2, 3, 4, 5).
numbers=[1,2,3,4,5,6]

// b. Iterate and Log Using forEach:
//Use the forEach method to iterate over the numbers array and log each number to the console.

numbers.forEach(function( number ) {
    console.log( number );
});

//Use the forEach method to iterate over the numbers array and log each number multiplied by 2 to the console.
numbers.forEach( function ( number ) { 
    console.log(number * 2);
} );

// Create and Log New Arrays Using map:
// Use the map method to create a new array called squaredNumbers that contains the square of each number in the numbers array. Log the squaredNumbers array to the console.
let squareNumbers=[1,2,3,4,5,6,7]
squareNumbers.map(( item )=> {
    console.log( item**2);
})

 squareNumbers=squareNumbers.map(function( number ) {
    return number * number;
});
console.log( squareNumbers );

// Create and Log New Arrays Using filter:
// Use the filter method to create a new array called evenNumbers that contains only the even numbers from the numbers array. Log the evenNumbers array to the cons.
evenNumbers=[1,2,3,4,5,6,7,8,9]
evenNumbers.filter(function( number ) {
    return number % 2 === 0;
});



