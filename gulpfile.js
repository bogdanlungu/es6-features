var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("babeljs", function () {
  return gulp.src("js/main.js")
    .pipe(babel({
			presets: ['es2015']
		}))
    .pipe(gulp.dest("dist"));
});

gulp.task('default', ['babeljs', 'watch'], function(){
  //console.log('done');
});

gulp.task('watch', function(){
  gulp.watch('js/*.js', ['default']);
});
