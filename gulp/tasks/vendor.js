'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var uglify       = require('gulp-uglify');
var concatFiles  = require('gulp-concat');
var stripDebug   = require('gulp-strip-debug');

gulp.task('vendor', function () {

  gulp.src([
    'app/vendor/zoomcharts/assets/images/netchart-sprite.png',
    'app/vendor/zoomcharts/assets/images/sprite.png',
    'app/vendor/zoomcharts/assets/images/vertical-resizer.png',
    'app/vendor/zoomcharts/assets/images/ajax_loader_blue_48.gif'
  ]).pipe(gulp.dest('build/images/'));

  gulp.src([
      'app/vendor/jquery-1.11.2.js',
    'app/vendor/cytoscape.js',
      'app/vendor/box-slider-all.jquery.min.js'
    ]).pipe(stripDebug())
    .pipe(concatFiles('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});