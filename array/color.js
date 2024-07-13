// a [Basic Array] Define a variable named colors and assign it an array containing strings representing different colors (e.g., "red", "green", "blue").
color = ["red", "green", "blue", "black", "yellow"]

//b Log the first element of the colors array to the console.
console.log(color[0]);

//c Change the second element of the colors array to "yellow". Log the second element of the colors array to the console to verify the change.
color[1] = "yellow";
console.log( color );

// d Add a new color to the end of the colors array. Log the last element of the colors array to the console.
color.push( "sky" );
console.log( color );

// c Iterate using Loops over the colors Array:
// [Loops for Arrays] Use a for loop to iterate over the colors array and log each color to the console.
for (let i=0; i < color.length; i++) {
    console.log(color[i]);
};

// f Use a while loop to iterate over the colors array and log each color to the console.
let i=0
while (i < color.length) {
    console.log(color[i]);
    i++;
};

// Use a for...of loop to iterate over the colors array and log each color to the console.
for (const colors of color) {
    console.log(color);
};

// d Check Array Properties:
//Use the typeof operator to check the type of colors array and log it to the console.
console.log(typeof color);

//Log the length property of the colors array to the console to see the number of elements in the array.
console.log(color.length);

// e Array Methods:
//Use the push method to add another color to the end of the colors array.
color.push(90);
console.log(color);

//Use the pop method to remove the last color from the colors array.
let lastColor = color.pop();
console.log(lastColor);

// Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.
let indexofBlue = color.indexOf("blue");
console.log(indexofBlue);

// f Add and Iterate Over Properties:
//Add a property to the colors array called owner and set its value to your name.
 color.owner="priya singh";
 console.log(color)
 
 //Log the colors array to see if the owner property is added.
 console.log(color);

// Use a for...in loop to iterate over the properties of the colors array and log each property name and the associated value to the console.
for (let property in color) {
    console.log( property + " : " + color[property]);
};



