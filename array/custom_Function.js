// ForEach: Write a function called forEachArray that takes an array and a callback function as arguments. The forEachArray function should apply the callback function to each element of the array but does not return anything. Note: You cannot use the inbuilt forEach function.
function forEachArray(array,callback) {
    for(let i=0; i < array.length; i++){
        callback(array[i])
    };
};
forEachArray([1,3,5,5,8,9],function(num) {console.log(num)});

// Map: Write a function called mapArray that takes an array and a callback function as arguments. The mapArray function should apply the callback function to each element of the array and return a new array containing the transformed elements. Note: You cannot use the inbuilt map function.
function mapArray(array1,callback) {
    for (const num of array1){
         callback(num)
    };
};
mapArray([1,5,4,9,3],function(num) {console.log(num)});

// Filter: Write a function called filterArray that takes an array and a callback function as arguments. The filterArray function should apply the callback function to each element of the array and return a new array containing only the elements for which the callback function returns true. Note: You cannot use the inbuilt filter function.
function filterArray(array,callback) {
    for(let i in array ) {
        callback(i)
    };
};
filterArray([6,9,4,3,2,9], function(num) {console.log(num)});

