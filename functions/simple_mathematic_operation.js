// a. Create a callback function doubleNumber that takes a number and returns its double.


function doubleNumber( num ) {
    return ( num + num );
};

// b. Create another callback function squareNumber that takes a number and returns its square.
function squareNumber( num ) {
    return num ** 2;
};

//c. Create another callback function incrementNumber that takes a number and returns the number incremented by one.
 function incrementNumber(num) {
    let i = 1;
    i = i + num;
    return i;
};

// d. Define a function performOperation that accepts two parameters: num (a number on which to perform the operation), and operation (a callback function that specifies the operation to be performed on num). Inside performOperation, call the operation function and pass num as an argument. The function should return the result
function performOperation( num, operation ) {
   return ( operation( num ) )

};
let double = performOperation( 45, doubleNumber );
console.log( double );

// e Call performOperation() with a number and each of the callback functions in turn to see the results of the operations. Log the result to the console for each call to performOperation.
let double1 = performOperation( 45, doubleNumber );
console.log(double1);

let double2 = performOperation( 45, incrementNumber );
console.log(double2);

let double3 = performOperation( 45, squareNumber );
console.log(double3);
