//alert("hello world!");
//console.log("test")

//var AutoInject=require('auto-inject');
//var result={};
//var injectInstance=AutoInject(dep,result)
//injectInstance.load("main")

(function init() {


  canvas = document.getElementById("canvas");
  exportRoot = new lib.hackathon();

  stage = new createjs.Stage(canvas);
  stage.addChild(exportRoot);
  stage.update();
  stage.enableMouseOver();

  createjs.Ticker.setFPS(lib.properties.fps);
  createjs.Ticker.addEventListener("tick", stage);
})()


stage.children[0].login_btn.on("click", function () {
  stage.children[0].gotoAndStop("dashboard")
  loadDashBoard();
})


function loadDashBoard() {
  //add review button
  stage.children[0].instance_5.on("click", function () {
    stage.children[0].play()


  })

  //add income button
  stage.children[0].instance_4.on("click", function () {
    alert("benchmark")
  })

  stage.children[0].income_btn.on("click", function () {
    alert("cash")
  })

  stage.children[0].instance_3.instance.on("click", function () {
    alert("green")
  })
  stage.children[0].instance_3.instance_1.on("click", function () {
    alert("orange")
  })
  stage.children[0].instance_3.instance_2.on("click", function () {
    alert("pink")
  })
  stage.children[0].instance_3.instance_3.on("click", function () {
    alert("purple")
  })
  stage.children[0].instance_3.instance_4.on("click", function () {
    alert("teal")
  })
}

window.enterFrame=function(a){
  console.log("entering frame",a)
}