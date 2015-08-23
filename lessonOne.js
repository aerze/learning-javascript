

//Learning about types in JS

//Remember that variables are references to objects in JavaScript
//The objects or things referenced have types.
//Lets go over the basic types and assign one to a variable.



//String
// A string is a 'string of text' literally.
// It's a set of characters enclosed by quotes
// Example: 'test' or 'Gustavo Suarez'
// or even '' <-- Note: You can have empty strings too!
var stringOfText = 'This is a string of text';
var emptyString = '';
console.log(stringOfText);


//Number
// A number type is just that, a number.
// Notice that there aren't any quotes when refering to a number.
// It is the number directly and exactly.
// Example: 20 or 3.14 or 2394852103
var number = 1000;
console.log(number);



//Boolean
// Also known as just a bool, this is simply a true or false value
// Example: true or false
var callMeMaybe = false;
console.log(callMeMaybe);



//Array
// An Array is a container that holds several values in a list form
// You can fill these lists with pretty much anything.
// In order to define an array we use square brackets []
// Then we put stuff inside seperated by commas , 
// For example you could have a list of names that looks like this
var namesArray = ['Sunny', 'Trey', 'John', 'Gus'];
console.log(namesArray);

// You can also have a numbers array
var bunchOfNumbers = [21, 42, 84, 162];
console.log(bunchOfNumbers);

// You can also have a mixed array with all kinds of stuff
var whatIsThisEven = ['test', false, 23, 55, 'chicken', 'tacos'];
console.log(whatIsThisEven);

// You can also have an empty array
var emptyArray = [];
console.log(emptyArray);

// Lastly you can even put arrays inside of other arrays.
var yoDawgIHeardYouLikeArraysInYourArrays = [ [0,1], [2,3] ];
console.log(yoDawgIHeardYouLikeArraysInYourArrays);



//These are only a few basic types, 
//we'll learn more later as we run into them. 


