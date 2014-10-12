module.exports.sumNumbers = function(array){
  var sum = 0;
  for(var count = 0; count < array.length; count++){
    sum += array[count]; // Ask Nick to explain this problem. 
  }
  return sum;
} 

module.exports.splitAndLowerCaseString = function(inputString){
  
  var lower = inputString.toLowerCase();
  var split = lower.split(",");
  return split;
}
module.exports.addIndex = function(array){
  return array.map(function(element, index){
    return index + " is " + element; // Go over with Nick 
  })
  
}
