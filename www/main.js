//alert("hello world!");
//console.log("test")

var AutoInject=require('auto-inject');
var result={};
var injectInstance=AutoInject(dep,result)
injectInstance.load("main")

