
function calculateArea(width, height) {
    return width * height;
};
let width = 45;
let height = 10;
console.log( calculateArea(width, height) )


const calculate_area = function(width, height) {
    return width * height;
};
console.log(calculate_area(width = 5, height = 10))


const calculate_Area = (width = 1, height = 1)=> {
    return width * height;
}
console.log(calculate_Area());
