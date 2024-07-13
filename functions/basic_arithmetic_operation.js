// a  Add: Create a callback function addNumbers that takes two numbers and returns their sum.
function addNumbers( num1, num2 ) {
    return num1+num2;
};

// b Multiply: Create a callback function multiplyNumbers that takes two numbers and returns their product
function multiplyNumbers( num1, num2 ) {
    return num1 * num2;
};

//c Subtract: Create a callback function subtractNumbers that takes two numbers and returns the result of subtracting the second number from the first.
function subtractionNumbers( num1, num2 ) {
    return num1 - num2;
};

// d Divide: Create a callback function divideNumbers that takes two numbers and returns the result of dividing the first number by the second, ensuring to handle division by zero.
function divideNumbers( num1, num2 ) {
    return num1 / num2;
};

// e Define a function performArithmetic that accepts three parameters: num1 and num2 (the numbers on which to perform the operation), and operation (a callback function that specifies the arithmetic operation to be performed on num1 and num2). Inside performArithmetic, call the operation function and pass num1 and num2 as arguments. The function should return the result.
function performArithmetic( num1, num2, operation ) {
    return operation( num1, num2 );
};

// f Call performArithmetic with different pairs of numbers and each callback function to see the results of the arithmetic operations.

let result = performArithmetic(45, 78, addNumbers);
console.log(result);

result = performArithmetic(56, 100, multiplyNumbers);
console.log(result);

result = performArithmetic(90, 23, subtractionNumbers);
console.log(result);

result = performArithmetic(78, 23, divideNumbers);
console.log(result);
