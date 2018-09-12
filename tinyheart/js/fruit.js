var fruitObj = function() {

  this.alive = [] //bool
  this.orange = new Image()
  this.blue = new Image()
  this.x = []
  this.y = []
}


fruitObj.prototype.num = 30
fruitObj.prototype.init = function() {

  for (var i = 0; i < this.num; i++) {
    this.alive[i] = true
    this.x[i] = 0
    this.y[i] = 0
    this.born(i)
  }
  this.orange.src = './src/fruit.png'
  this.blue.src = './src/blue.png'
}

fruitObj.prototype.draw = function() {

  for (var i = 0; i < this.num; i++) {
    //dorw
    // console.log('hellop')
    ctx2.drawImage(this.orange, this.x[i] - this.orange.width * 0.5, this.y[i] - this.orange.height * 0.5)
    //find an ane, grouw ,fly up
  }

}

fruitObj.prototype.born = function(i) {

  var aneid = Math.floor(Math.random() * ane.num)
  this.x[i] = ane.x[aneid]
  this.y[i] = canhg - ane.len[aneid]



}

fruitObj.prototype.update = function() {
  var num = 0
  for (var i = 0; i < array.length; i++) {
    array[i]
  }

}
