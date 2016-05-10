var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var browserify = require('gulp-browserify');

gulp.task("babeljs", function() {
    return gulp.src(['js/es6.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(browserify({
            insertGlobals: true,
            debug: !gulp.env.production
        }))
        .pipe(rename('es5.js'))
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ['babeljs', 'watch'], function() {
    //console.log('done');
});

gulp.task('watch', function() {
    gulp.watch('js/*.js', ['default']);
});
