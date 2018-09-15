var babyObj = function () {
  this.x
  this.y
  this.angle
  this.babyEye = new Image()
  this.babyBody = new Image()
  this.babyTail = new Image()
  this.TailCount = 0
  this.babyTailTimer = 0
}
babyObj.prototype.init = function () {
  this.x = canwidth * 0.5 - 50
  this.y =  canhg  * 0.5 + 50
  this.angle = 0
  this.babyEye.src = './src/babyEye0.png'
  this.babyBody.src = './src/babyFade0.png'
  this.babyTail.src = './src/babyTail0.png'
};

babyObj.prototype.draw = function () {
  //translate()
  this.x = lerpDistance(mom.x,this.x,0.98)
  this.y = lerpDistance(mom.y,this.y,0.98)
  // lerp lerpAngle
  var deltaY = mom.y - this.y
  var deltaX = mom.x - this.x
  var beta = Math.atan2(deltaY, deltaX) + Math.PI
  this.babyTailTimer  += daltaTime


  if(this.babyTailTimer > 50){

    this.TailCount = ( this.TailCount + 1 ) % 8
    this.babyTailTimer %=50
  }


 var TailCount = this.TailCount

  // console.log(TailCount);
  this.angle = lerpAngle(beta,this.angle,0.6)
  ctx1.save()
  ctx1.translate(this.x,this.y)
  ctx1.rotate(this.angle)
// console.log(TailCount);
ctx1.drawImage(babyTail[TailCount],-this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5)

ctx1.drawImage(this.babyBody,-this.babyBody.width * 0.5,-this.babyBody.height * 0.5)

ctx1.drawImage(this.babyEye,-this.babyEye.width * 0.5, -this.babyEye.height * 0.5)
ctx1.restore()
}
