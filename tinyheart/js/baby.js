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


// this.babyEyeTimer +=daltaTime
this.babyEyeTimer += daltaTime
// console.log('daltatime', daltaTime)
console.log('this.babyEyeTimer', this.babyEyeTimer)
if(this.babyEyeTimer > this.babyEyeInterval){

     this.babyEyeCount = (this.babyEyeCount + 1) % 2
     this.babyEyeTimer %= this.babyEyeInterval


     if( this.babyEyeCount == 0){
       this.babyEyeInterval = Math.random() * 1500 + 2000

     } else {
       this.babyEyeInterval = 200
     }
 }

var babyEyeCount = this.babyEyeCount
  var TailCount = this.TailCount
  // console.log(TailCount);
  this.angle = lerpAngle(beta, this.angle, 0.6)
  ctx1.save()
  ctx1.translate(this.x, this.y)
  ctx1.rotate(this.angle)
  // console.log(TailCount);
  ctx1.drawImage(babyTail[TailCount], - babyTail[TailCount].width * 0.5 + 23, - babyTail[TailCount].height * 0.5)

  ctx1.drawImage(this.babyBody, -this.babyBody.width * 0.5, -this.babyBody.height * 0.5)

  ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5)
  ctx1.restore()
}
