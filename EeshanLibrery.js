
function collision(sub1,sub2){
    if (sub1.x - sub2.x < sub2.width/2 + sub1.width/2
      && sub2.x - sub1.x < sub2.width/2 + sub1.width/2
      && sub1.y - sub2.y < sub2.height/2 + sub1.height/2
      && sub2.y - sub1.y < sub2.height/2 + sub1.height/2) {
     return true;
  }
  else {
   return false;
  }
  }
  function bounce(sub1,sub2){
    if (sub1.x - sub2.x < sub2.width/2 + sub1.width/2
      && sub2.x - sub1.x < sub2.width/2 + sub1.width/2) {
        sub1.velocityX = sub1.velocityX * (-1);
        sub2.velocityX = sub2.velocityX * (-1);
  }
  if (sub1.y - sub2.y < sub2.height/2 + sub1.height/2
    && sub2.y - sub1.y < sub2.height/2 + sub1.height/2){
      sub1.velocityY = sub1.velocityY * (-1);
      sub2.velocityY = sub2.velocityY * (-1);
  }
  }