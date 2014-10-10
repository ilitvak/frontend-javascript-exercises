module.exports.createCourse = function(title, duration, students) {
  var course = {
    title: title,
    duration: duration,
    students: students
  };
  return course;
};
module.exports.addProperty = function(object, newProp, newValue){
  if(! object.hasOwnProperty(newProp)) {
    object[newProp] = newValue;
  }
  return object;
};

module.exports.formLetter = function(letter){
  var form = "Hello " + letter.recipient + ",\n\n" + letter.msg + "\n\nSincerely," + "\n" + letter.sender;
  return form;
};

module.exports.canIGet = function(item, money) {
  var canIBuy = {
    "MacBook Air": 999,
    "MacBook Pro": 1299,
    "Mac Pro": 2499,
    "Apple Sticker": 1
  };
  return money >= canIBuy[item]; 
};



