var babyObj = function() {
  this.x
  this.y
  this.angle
  // this.babyEye = new Image()
  this.babyBody = new Image()

  this.TailCount = 0
  this.babyTailTimer = 0
  this.babyEyeCount = 0
  this.babyEyeTimer = 0
  this.babyEyeInterval = 1000
  this.babyBodyTimer = 0
  this.babyBodyCount = 0
  this.babyBoodyInterval

}
babyObj.prototype.init = function() {
  this.x = canwidth * 0.5 - 50
  this.y = canhg * 0.5 + 50
  this.angle = 0

  // this.babyEye.src = './src/babyEye0.png'

  this.babyBody.src = './src/babyFade0.png'

};

babyObj.prototype.draw = function() {
  //translate()
  this.x = lerpDistance(mom.x, this.x, 0.98)
  this.y = lerpDistance(mom.y, this.y, 0.98)
  // lerp lerpAngle
  var deltaY = mom.y - this.y
  var deltaX = mom.x - this.x
  var beta = Math.atan2(deltaY, deltaX) + Math.PI
  this.babyTailTimer += daltaTime
  if (this.babyTailTimer > 50) {

    this.TailCount = (this.TailCount + 1) % 8
    this.babyTailTimer %= 50
  }



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

    this.babyEyeCount = (this.babyEyeCount + 1) % 2


    this.babyEyeTimer %= this.babyEyeInterval


    if (this.babyEyeCount == 0) {
      this.babyEyeInterval = Math.random() * 1500 + 2000

    } else {


      this.babyEyeInterval = 200;
    }
  }


  var babyEyeCount = this.babyEyeCount
  var TailCount = this.TailCount
  this.angle = lerpAngle(beta, this.angle, 0.6)

  //baby body
  this.babyBodyTimer += daltaTime
  if (this.babyBodyTimer > 300) {
    this.babyBodyCount = (this.babyBodyCount + 1)
    this.babyBodyTimer %= 300
    if (this.babyBodyCount > 19) {
      this.babyBodyCount = 19
    }


  }
  ctx1.save()
  ctx1.translate(this.x, this.y)
  ctx1.rotate(this.angle)
  // console.log(TailCount);
  ctx1.drawImage(babyTail[TailCount], -babyTail[TailCount].width * 0.5 + 23, -babyTail[TailCount].height * 0.5)
  var babyBodyCount = this.babyBodyCount
  ctx1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width * 0.5, -babyBody[babyBodyCount].height * 0.5)

  ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5)

  ctx1.restore()
}
