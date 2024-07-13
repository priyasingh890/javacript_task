function greet(a) {
    return `"hello ${a}!"`;
};
console.log( greet("Alice") );


function greetDefault(name = "Guest") {
    return `"Hello, ${name}".`;
};
console.log( greetDefault() ) 


const greet_function = function() {
    return "Hello,siya";
};
console.log( greet_function() );


const greet_arrow_function = () => {
    return "Hello ranjana";
};
console.log( greet_arrow_function() );
