module.exports.stream = function(conditionalFn, actionFn){
  while(conditionalFn()) {
    actionFn();
  }
}

module.exports.sumNumbers = function(array){
  var number = 0;
  while(array.length > 0){
      number+=array.pop();
  }
  return number;
}

