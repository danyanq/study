var fruitObj = function() {

  this.alive = [] //bool
  this.orange = new Image()
  this.blue = new Image()
  this.x = []
  this.y = []
  this.l = []
  this.speed = []
  this.fruitType = []
}


fruitObj.prototype.num = 15
fruitObj.prototype.init = function() {

  for (var i = 0; i < this.num; i++) {
    this.alive[i] = true
    this.x[i] = 0
    this.y[i] = 0
    this.speed[i] = Math.random() * 0.017 + 0.003
    this.fruitType[i] = ''
    this.born(i)
  }
  this.orange.src = './src/fruit.png'
  this.blue.src = './src/blue.png'
}

fruitObj.prototype.draw = function() {

  if (daltaTime > 20) {
    daltaTime = 20
  }

  for (var i = 0; i < this.num; i++) {
    if (this.alive[i]) {

      if (this.fruitType[i] == 'blue') {
        var pic = this.blue

      } else {

        var pic = this.orange
      }
      if (this.l[i] <= 14) {
        this.l[i] += this.speed[i] * daltaTime

      } else {
        this.y[i] -= this.speed[i] * 7 * daltaTime
      }

      // console.log(daltaTime)
      ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i])
      //find an ane, grouw ,fly up
      if (this.y[i] < 10) {
        this.alive[i] = false
      }
    }

  }

}

fruitObj.prototype.born = function(i) {

  var aneid = Math.floor(Math.random() * ane.num)
  this.x[i] = ane.x[aneid]
  this.y[i] = canhg - ane.len[aneid]
  this.l[i] = 0
  this.alive[i] = true
  var ran = Math.random()
  if (ran < 0.2) {
    this.fruitType[i] = 'blue'
  } else {
    this.fruitType[i] = 'orange'
  }


}

fruitObj.prototype.update = function() {
  var num = 0
  for (var i = 0; i < array.length; i++) {
    array[i]
  }

}

fruitObj.prototype.dead = function (i) {
  this.alive[i] = false
}

function fruitMonitor() {
  var num = 0
  for (var i = 0; i < fruit.num; i++) {
    if (fruit.alive[i]) {
      num++
    }
    if (num < 15) {
      sendFruit()
      return;
    }
  }
}

function sendFruit() {
  for (var i = 0; i < fruit.num; i++) {
    if (!fruit.alive[i]) {
      fruit.born(i)
      return
    }

  }
}
