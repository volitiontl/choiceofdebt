var exec = require('child_process').execSync;
var browserSync = require('browser-sync').create();
var gulp = require('gulp');

gulp.task('watch', function () {
  exec("node build-deps.js > ./www/deps.out.js");//needed because loaddir doesn't work with browserify yet.
  exec("browserify ./www/main.js -o ./www/main.out.js");
  browserSync.init({
    server: {
      baseDir: "./www"
    }
  });

  gulp.watch(["www/*.*","www/*/*.*","controllers/*.*","dependencies/*.*","!www/*.out.js"],function(){
    try{
      exec("node build-deps.js > ./www/deps.out.js");//needed because loaddir doesn't work with browserify yet.
      exec("browserify ./www/main.js -o ./www/main.out.js");
      browserSync.reload()
    }
    catch(ex){
      console.log("error browserifying")
    }
  });
});






gulp.task('generate',function(){



});
