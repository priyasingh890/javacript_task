function calculateAverageAge(people) {

    let totalAge = 0;
    
    people.forEach((people)=> {
        totalAge+=people.age;
    });
    
    let averageAge = totalAge / people.length;
     
    return averageAge 
        
};

const calculateAge=calculateAverageAge(people)
console.log(calculateAge)
