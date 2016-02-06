var fs=require('fs');

var folder="./dependencies";
var foldera="./dependencies/";
var temp = fs.readdirSync(folder);


function outputDep(a){
  if(a[a.length-1]!="s" ||a[a.length-2]!="j" ) return//lazy hack for filtering non js files.
  var fn=require(foldera+a)
  var name=a.slice(0, a.length-3)
  console.log('dep["'+name+'"]='+fn.toString())
}

console.log("var dep={}")
for(var i=0;i<temp.length;i++){
  outputDep(temp[i])
}


