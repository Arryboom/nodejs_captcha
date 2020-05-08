/* const fs = require("fs");

// fs.wirteFile有三个参数
// 1,第一个参数是要写入的文件路径
// 2,第二个参数是要写入得内容
// 3,第三个参数是可选参数,表示要写入的文件编码格式,一般就不写,默认就行
// 4,第四个参数是个回调函数  只有一个参数error,来判断是否写入成功
fs.writeFile("./http/11.txt", "wwwww", error => {
  if (error) return console.log("写入文件失败,原因是" + error.message);
  console.log("写入成功");
});

//如果在使用fs.writeFIle时,要写入文件不存在,则直接写入,如果存在,则会覆盖原内容 */




//

require('canvas')
const { createCanvas }=require('canvas')

const xcanvas = createCanvas(102, 42) // 按照微信官方要求，长宽比5:4
const context = xcanvas.getContext('2d')
//ctx.font = '14px "Microsoft YaHei"' // 统一使用微软雅黑字体
//context.fillText('Hellow', 84, 24, 204)

identifyCode='1234'
fontSizeMin=16
fontSizeMax=20
backgroundColorMin=180
backgroundColorMax=240
colorMin=50
colorMax=160
lineColorMin=40
lineColorMax=180
dotColorMin=0
dotColorMax=255
contentWidth=0
contentHeight=0
    function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }
    function randomColor(min, max) {
      let r = randomNum(min, max)
      let g = randomNum(min, max)
      let b = randomNum(min, max)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    }
	function drawPic(jack_id) {
      //let canvas = document.getElementById('s-canvas')
	  let canvas = xcanvas
      let ctx = canvas.getContext('2d')
      ctx.textBaseline = 'bottom'
      // 绘制背景
      ctx.fillStyle = randomColor(this.backgroundColorMin, this.backgroundColorMax)
      //ctx.fillRect(0, 0, this.contentWidth, this.contentHeight)
	  ctx.fillRect(0, 0, 102, 42)
      // 绘制文字
	  identifyCode=randomNum(0,9).toString()+randomNum(0,9).toString()+randomNum(0,9).toString()+randomNum(0,9).toString()
      for (let i = 0; i < this.identifyCode.length; i++) {
		//console.log(i)
        drawText(ctx, this.identifyCode[i], i)
      }
      // this.drawLine(ctx)
      // this.drawDot(ctx)
	  var fs = require("fs");
	  var data="ddd";
	  //fs.writeFile('./wfile.txt',canvas.toBuffer(),{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
	  fs.writeFile('./code/'+jack_id+"_"+identifyCode+".png",canvas.toBuffer(),{flag:'w',encoding:'utf-8',mode:'0666'},function(err){
     if(err){
         console.log("文件写入失败")
     }else{
         console.log("文件写入成功");

     }

})
    }
	function drawText(ctx, txt, i) {
      //ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax)
      //ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
	  ctx.fillStyle = randomColor(this.colorMin, this.colorMax)
      ctx.font = randomNum(this.fontSizeMin, this.fontSizeMax) + 'px SimHei'
      //let x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1))
	  let x = (i + 1) * (102 / (4 + 1))
	  console.log(x)
      //let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5)
	  //let y = this.randomNum(this.fontSizeMax, 42 - 5)
	  let y = randomNum(25, 42 - 12)
	  //console.log(this.randomNum(-45,56))
      var deg = randomNum(-45, 45)
      // 修改坐标原点和旋转角度
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(txt, 0, 0)
      // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    }
	function drawLine(ctx) {
      // 绘制干扰线
      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax)
        ctx.beginPath()
        //ctx.moveTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
        //ctx.lineTo(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight))
		ctx.moveTo(this.randomNum(0, 102), this.randomNum(0,42))
		ctx.lineTo(this.randomNum(0, 102), this.randomNum(0,42))
        ctx.stroke()
      }
    }
	function drawDot(ctx) {
      // 绘制干扰点
      for (let i = 0; i < 100; i++) {
        ctx.fillStyle = this.randomColor(0, 255)
        ctx.beginPath()
        //ctx.arc(this.randomNum(0, this.contentWidth), this.randomNum(0, this.contentHeight), 1, 0, 2 * Math.PI)
		ctx.arc(this.randomNum(0, 102), this.randomNum(0, 42), 1, 0, 2 * Math.PI)
        ctx.fill()
      }
    }













//######################################################################
for (rr=1;rr<=501;rr++){
drawPic(rr)
}


