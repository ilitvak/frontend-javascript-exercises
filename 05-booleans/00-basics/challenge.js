module.exports.equalStrings = function(stringOne, stringTwo) {
                  return (stringOne == stringTwo); // stringOne is == equal to string two so the type or value is the same.   
};

module.exports.notEqual = function(one, two) {
                return (one !== two); // This states that one !== is strictly not equal to the value or type of two. 
};

module.exports.inBetween = function(lower, middle, upper) {
                return (lower < middle) && (middle < upper); // This expression is seperated by a logical expression && which compares two different values and if both of them are true, then it is true. 
};

module.exports.outsideRanges = function(number) {
            return ((number >= 10) != (number <= 20)) && ((42 < number) != (number <= 75)) && ((1 < number) != (number < 6)); // So to fully understand this: 
  // not between 10 and 20, it also can't be 10 or 20 : This means thats the "number" can be any value. Also -My boundaries are 10 and 20.  So if a random number is chosen and lets say its 15, 15 is between 10 and 20, thus - The parameters stated it cant be between 10-20 and 15 is so it would be true. 

};

module.exports.nameAndPrice = function(name, price) {
                   return ((name === "NYTimes") || (name === "LATimes")) && (price >= 1);
};