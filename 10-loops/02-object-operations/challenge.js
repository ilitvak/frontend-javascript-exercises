module.exports.copy =function(object){
  var mimic = {};
  for(var property in object) {
    mimic[property] =  object[property];
  }
  return mimic;
}

module.exports.extend = function(dest, src){
  for(var property in src){
    dest[property] = src[property];
  }
  return dest;
}

module.exports.hasElems = function(object, array){
  var returnVar = true;
  array.forEach(function(key) {
    if(! object.hasOwnProperty(key)) {
      returnVar = false; // talk with nick
    }
  });
  return returnVar;
}