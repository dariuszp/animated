'use strict';

var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    rename  = require('gulp-rename'),
    concat  = require('gulp-concat');

gulp.task('default', function () {

    gulp.src([
        __dirname + '/src/*Error.js',
        __dirname + '/src/animation.js',
        __dirname + '/src/animated.js'
    ])
        .pipe(concat('animated.js'))
        .pipe(gulp.dest(__dirname + '/dist'))
        .pipe(uglify({
            mangle: true
        }))
        .pipe(rename('animated.min.js'))
        .pipe(gulp.dest(__dirname + '/dist'));

});