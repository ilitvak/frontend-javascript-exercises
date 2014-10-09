module.exports.newArray = function(w, x, y, z) {
  
  var myArray = [w,x,y,z]
  return myArray;
  
                 
}


module.exports.firstAndLast = function(w) {
             
  var first = w.shift();
  var last = w.pop();
  var array = [first, last];
  return array;
              
  
}
       
            


