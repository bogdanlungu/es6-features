var gulp = require("gulp");
var browserify = require('gulp-browserify');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("babeljs", function () {
	browserify({
	    entries: 'js/es6.js',
	    debug: true
	})
	.transform("babelify", {presets: ["es2015"]})
	.bundle()
	.pipe(source('es5.js'))
	.pipe(gulp.dest('./dist'));
});

gulp.task('default', ['babeljs', 'watch'], function() {
    //console.log('done');
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['default']);
});
