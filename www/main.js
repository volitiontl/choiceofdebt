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


function updateChart(){
  stage.children[0].instance_6.gotoAndStop("one")

}


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
    stage.children[0].instance_6.gotoAndStop("benchmark")
    //alert("benchmark")
  })

  stage.children[0].income_btn.on("click", function () {
    stage.children[0].instance_6.gotoAndStop("income")

  })

  stage.children[0].instance_3.instance.on("click", function () {
    stage.children[0].instance_6.gotoAndStop("cat1")
    //alert("green")
  })
  stage.children[0].instance_3.instance_1.on("click", function () {
    stage.children[0].instance_6.gotoAndStop("cat2")
    //alert("orange")
  })
  stage.children[0].instance_3.instance_2.on("click", function () {
    stage.children[0].instance_6.gotoAndStop("cat3")
    //alert("pink")
  })
  stage.children[0].instance_3.instance_3.on("click", function () {
    stage.children[0].instance_6.gotoAndStop("cat4")
    //alert("purple")
  })
  stage.children[0].instance_3.instance_4.on("click", function () {
    stage.children[0].instance_6.gotoAndStop("cat5")
    //alert("teal")
  })


}

var i=0;
window.enterFrame=function(a){
  console.log("entering frame",a)
  if(a=="review"){

    stage.children[0].instance.children[2].on("click",function(){
      if(i>=3){
        i=0;
        stage.children[0].gotoAndPlay("finishreview")
        return
      }
      stage.children[0].instance.children[3].play("full"+i++)


    })
    stage.children[0].instance.children[1].on("click",function(){
      if(i>=3){
        i=0;
        stage.children[0].gotoAndPlay("finishreview")
        return
      }
      stage.children[0].instance.children[3].play("full"+i++)
      //alert("need")
    })
  }
  console.log("here",a)
  if(a=="end"){
    stage.children[0].instance_6.gotoAndStop("diff")
  }

}