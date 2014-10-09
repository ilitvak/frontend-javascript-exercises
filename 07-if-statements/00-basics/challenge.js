module.exports.favoriteNumber = function(fav, guess) {
  if(guess > fav) {
    return "Too high";
  }
  else if (guess < fav) {
     return "Too low";
  }
  else {
    return "You got it!";
  }
};

module.exports.checkLock = function(w,x,y,z) {
  if((w === 3 || w === 5 || w ===7) && (x === 2) && (y >= 5 && y <= 100) && (z < 9 || z > 20)) {
  return "correct";  
 }
  else {
     return "incorrect";
  }
 };


module.exports.canIGet = function(item, money){
  if(money >= 999 && item === "MacBook Air") {
    return true;
  }
  else if(money >= 1299 && item === "MacBook Pro") {
      return true;    
  }
  else if(money >= 2499 && item ==="Mac Pro") {
    return true;
  }
  else if(money >= 1 && item === "Apple Sticker") {
    return true;
  }
  else{
     return false;  
  }
};

