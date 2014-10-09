module.exports.reversePlusOne = function(array) {  
  
  var reversing = array.reverse();
  array.unshift(1);
  return reversing;


}

module.exports.plusesEverywhere = function(array) {

    var adding = array.join("+");
    return adding;
  
}

module.exports.arrayQuantityPlusOne = function(array) {
  
  var quantity = array.length + 1;
  return quantity;

}