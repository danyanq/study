var babyObj = function() {
  this.x
  this.y
  this.angle
  this.babyEye = new Image()
  this.babyBody = new Image()
  this.babyTail = new Image()
  this.babyTailTimer = 0
  this.babyTailCount = 0

  this.babyEyeTimer = 0
  this.babyEyeCount = 0
  this.babyEyeInterval = 0


}
babyObj.prototype.init = function() {
  this.x = canwidth * 0.5 - 50
  this.y = canhg * 0.5 + 50
  this.angle = 0

  this.babyBody.src = './src/babyFade0.png'
  this.babyTail.src = './src/babyTail0.png'
};

babyObj.prototype.draw = function() {
  //translate()
  this.x = lerpDistance(mom.x, this.x, 0.98)
  this.y = lerpDistance(mom.y, this.y, 0.98)
  // lerp lerpAngle
  var deltaY = mom.y - this.y
  var deltaX = mom.x - this.x
  var beta = Math.atan2(deltaY, deltaX) + Math.PI

  //lerp angle
  this.angle = lerpAngle(beta, this.angle, 0.6)


  this.babyTailTimer += daltaTime

  if (this.babyTailTimer > 50) {
    this.babyTailCount = (this.babyTailCount + 1) % 8
    this.babyTailTimer %= 50

  }

  //babt eye
  this.babyEyeTimer += daltaTime
  if (this.babyEyeTimer > this.babyEyeInterval) {

    this.babyEyeCount = ( this.babyEyeCount + 1 ) % 2


    this.babyEyeTimer %= this.babyEyeInterval

    if (this.babyEyeCount == 0) {
      this.babyEyeInterval = Math.random() * 1500 + 2000

    } else {

      this.babyEyeInterval = 200;
    }
  }

  ctx1.save()
  ctx1.translate(this.x, this.y)
  ctx1.rotate(this.angle)
  var babyTailCount = this.babyTailCount
  ctx1.drawImage(babyTail[babyTailCount], -this.babyTail.width * 0.5 + 23, -this.babyTail.height * 0.5)

  ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5)
  var babyEyeCount = this.babyEyeCount
  console.log(babyEyeCount);
  ctx1.drawImage(babyEye[babyEyeCount], -this.babyEye.width * 0.5, -this.babyEye.height * 0.5)
  ctx1.restore()
}
