//判断大鱼和果实的距离

function momFruitCollision() {

  for (var i = 0; i < fruit.num; i++) {
    if (fruit.alive[i]) {
             //calculate
            var l =  calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y)
            if(l < 900){
              //fruit eaten
              fruit.dead(i)
            }

    }
  }
}