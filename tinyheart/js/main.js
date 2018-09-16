var can1
var can2
var ctx1
var ctx2
var lastTime
var daltaTime

var canwidth
var canhg
var ane
var fruit
var bgPic = new Image()
var mom
var baby
var mx
var my
var babyBody = []
var babyTail = []
var babyEye = []
document.body.onload = game;

function game (){
  init()
  lastTime = Date.now()
  daltaTime = 0
  gameloop()


}


function init() {
  can1 = document.querySelector('#canvas1')//fishes , dust, ui , circle
  ctx1= can1.getContext("2d")
  can2 = document.querySelector('#canvas2')
  ctx2= can2.getContext("2d")
  can1.addEventListener('mousemove',onMouseMove,false)
  bgPic.src = './src/background.jpg'
  canwidth = can1.width
  canhg = can1.height
  ane =  new aneObj()
  ane.init()
  fruit = new fruitObj()
  fruit.init()
 mom = new momObj()
 baby = new babyObj()

 mom.init()
baby.init()
 mx = canwidth * 0.5
 my = canhg * 0.5
  // canvas context
  for (var i = 0; i < 8 ; i++) {

       babyTail[i] = new Image()
       babyTail[i].src = './src/babyTail' + i + '.png'
    }
    for (var i = 0; i < 2 ; i++) {

         babyEye[i] = new Image()
         babyEye[i].src = './src/babyEye' + i + '.png'
      }

      for (var i = 0; i < 20 ; i++) {

           babyBody[i] = new Image()
           babyBody[i].src = './src/babyFade' + i + '.png'
        }

}
function gameloop(){
   window.requestAnimFrame(gameloop) // setInterval, setTimeout, frame per second
   var now = Date.now()
   daltaTime = now - lastTime
   lastTime = Date.now()
   drawBackground()
   ane.draw()
   fruit.draw()
   fruitMonitor()
   ctx1.clearRect(0,0,canwidth,canhg)
   mom.draw()
 momFruitCollision()
 momBabyCollision()
  baby.draw()
 }


function onMouseMove(e) {

  if (e.offSetX || e.layerX) {
   mx = e.offSetX == undefined ? e.layerX : e.offSetX
    my = e.offSetY == undefined ? e.layerY : e.offSetY
  // console.log(mx,my)
  }
}
