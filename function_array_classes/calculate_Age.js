// 1 Calculate Age:
// a Define an array called people containing several objects, each representing a person. Each object should have properties such as name, and age.

const people = [
    {name : "riya", age : 24},
    {name : "rani", age : 20},
    {name : "shanti", age : 23},
    {name: "saroj", age : 20}
]

//Define a function called calculateAverageAge() that takes the people array as input and returns the average age of all the people in the array.
function calculateAverageAge( people ) {

    let totalAge = 0;
    
    people.forEach(( people )=> {
        totalAge+=people.age;
    });
    
    let averageAge = totalAge / people.length;
     
    return averageAge ;
        
};

const calculateAge=calculateAverageAge( people );
console.log( calculateAge );
