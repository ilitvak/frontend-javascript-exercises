module.exports.getKeys = function(object){
  var keys = [];
  for(var property in object){
    keys.push(property);
  }
  return keys;
}

module.exports.getValues = function(object){
  var keys = [];
  for(var value in object){
    keys.push(object[value]);
  }
  return keys;
} 
  
module.exports.objectToArray = function(obj){
  var keys = Object.keys(obj);
  return keys.map(function(key) {
    return key + " is " + obj[key]; 
  });
}