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
            return ((number < 10) || (number > 20)) && ((number <= 42) || (number > 75)) && ((number <=1) || (number >= 6));  // So to fully understand this: 
  // not between 10 and 20, it also can't be 10 or 20 : This means thats the "number" can be any value. Also -My boundaries are 10 and 20.  This means to make the first test true the number has to be less than 10 so negatives to 9 make it true. Then - numbers greater than 20 also meet the demands of the not between 10 and 20. The reason we chose the OR operator is because  

};

module.exports.nameAndPrice = function(name, price) {
                   return ((name === "NYTimes") || (name === "LATimes")) && (price >= 1);
};