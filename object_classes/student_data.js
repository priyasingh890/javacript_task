// a [Basic Object] Define a variable named student and assign it an empty object.
let student = {}


//b Add properties to the student object for name, email, and age. Set their values to your own name, email, and age.
student = {name : "priya", email : "priyasingh21@navgurukul.org", age : "24"};


//c Log the name property of the student object to the console.
console.log(student);


// d Update the age property of the student object to some random value, say 10. Log the age property of the student object to the console to see the updated property.
student["name"] = 10;
student.age = 20;
console.log( student );

// e Add a method called greet to the student object that logs a greeting message using the name property, e.g., "Hello, Alice!". Call the greet method to see the greeting message.
student = {
    name:"Alice",
    email:"priyasingh21@navgurukul.org",
    age:"24",
    greet:function() { console.log("Hello, Alice!") }
};
console.log(student.greet());

// f [Nested Object] Add a new object called address inside the student object as its property. The address object should have properties for country, city, and pin_code. Set their values to your address details.
student = {
    name : "Alice",
    email : "priyasingh21@navgurukul.org",
    age : "24",
    greet : function() {console.log("Hello, Alice!")},
    address : {
         country : "india",
         city : "lucknow",
         pin_code : 241202
    }
};
// g Log the country property of the address object to the console.
console.log(student.address);

// h Update the pin_code property of the address object to a new pin code. Log the address object to the console to see the updated pin_code property.
student.address.pin_code = 6789054;
console.log(student);

// i Create a new object named friend with the same properties as the student object, but with values representing a friend's name, email, age, and address. The object should also have the greet method. Call the greet method and also, log the friend object into the console.
let friend = {
    name : "raja",
    email : "rajasingh21@navgurukul.org",
    age : 20,
    greet : function() { console.log("hello ranjana!") },
    address : {
        country : "India",
        city : "Lucknow",
        pin_code : 678908
    }
};
console.log(friend);
console.log(friend.greet());

// j Create a new object named topper with the same properties as the student object, but with values representing a topper’s name, email, age, and address.  The object should also have the greet method. Call the greet method and also, log the topper object into the console.
let topper = {
    name : "geeta",
    email : "geetasingh@21navgurukul.org",
    age : 24,
    greet : function() {
        console.log("hello nidhi!");
    },
    address : {
        country : "banglore",
        city : "huskur",
        pin_code : 345678,
    }
};
console.log( topper );
console.log( topper.greet() );

// k [Class] Define a class called Student that takes parameters for name, email, age, country, city, and pin_code. Inside the class's constructor, set these parameters as properties of the new object. The country, city, and pin_code properties should be added inside the address object in a nested way. Make sure to add the greet method inside the class.

// f Define and Use the Student Class:
class Student {
    constructor( name, email, age, country, city, pin_code ) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country : country,
            city : city,
            pin_code : pin_code
        };
    };
        getFullAddress() {
            return (`${this.address.country},${this.address.city} - ${this.address.pin_code}`);
        };
};

let student_data = new Student( "ranjana", "ranjana@21navgurukul.org", 20, "India", "cityName", 241202 );
    console.log(student) 

    student_data = new Student( "geeta","geeta@21navgurukul.org", 25 , "India", "banglore", 3456756 );
    console.log(student);

    student_data = new Student("nidhi", "nidhi@21navgurukul.org", 20, "India", "pune", 23456);
    console.log(student)

    console.log(student_data.address.country, student_data.address.city, student_data.address.pin_code)
    console.log(student_data.getFullAddress());

// g Create and Log Student Objects:
//Create objects of the Student class for yourself, your friend, and another student. Log these objects to the console to see the created objects.
class Students {
    constructor( name, email, age, country, city, pin_code){
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country : country,
            city : city,
            pin_code : pin_code
        };
    };
    
    greet() {
        return (`${this.address.country},${this.address.city} - ${this.address.pin_code}`)
    };
    
    getFullAddress() {
            return (`${this.address.country},${this.address.city} - ${this.address.pin_code}`);
    };
};
const shanti = new Students( "Shanti", "shantisingh@21gmail.com", 22, "India", "banglore", 234566 );
console.log(shanti);

const rani= new Students( "Rani", "ranisingh@21navgurukul.org", 20, "India", "banglore", 3456756 );
console.log(rani);

const shivani = new Students( "Shivani", "shivani@21navgurukul.org", 23, "India", "banglore", 123455 );
console.log(shivani);

const poojameena = new Students( "poojameena", "poojameena21@navgurukul.org", 23, "banglore", 34567 );
console.log(poojameena);
console.log(rani.greet());
console.log(shanti.getFullAddress());






