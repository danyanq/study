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
var mx
var my

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
 mom.init()

 mx = canwidth * 0.5
 my = canhg * 0.5
  // canvas context
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
 }


function onMouseMove(e) {

  if (e.offSetX || e.layerX) {
   mx = e.offSetX == undefined ? e.layerX : e.offSetX
    my = e.offSetY == undefined ? e.layerY : e.offSetY
  // console.log(mx,my)
  }
}
