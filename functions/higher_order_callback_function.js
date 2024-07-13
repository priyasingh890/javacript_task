// a
function callback(num) {
    console.log( num );
} ;

// b
function highOrderFunction( num, callback ) {
    callback( num );
};
 highOrderFunction( 7, callback );
// c
highOrderFunction( 8, function( num ) {
    console.log( num * 2 );
});

// d
highOrderFunction( 8, function(num) {
    console.log(num ** 2);
})

// e 
function new_highOrderFunction( num1, num2, callback ) {
    callback(num1,num2);
};
new_highOrderFunction( 8, 10, function( num1, num2 ) {
    console.log(num1+num2);
});
