'use strict';

var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename');

gulp.task('default', function () {

    gulp.src([
        __dirname + '/src/*Error.js',
        __dirname + '/src/animation.js',
        __dirname + '/src/animated.js'
    ])
        .pipe(rename('animated.js'))
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest(__dirname));

});