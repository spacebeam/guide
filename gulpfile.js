'use strict';

var gulp = require("gulp");
const eslint = require('gulp-eslint');
var gutil = require("gulp-util");
var gulpdest = require("gulp-dest");
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var debug = require('gulp-debug');
var webserver = require('gulp-webserver');
var paths = require("./paths.js");

gulp.task('lint', () => {
  return gulp.src([paths.build(),'!node_modules/**'])
    .pipe(eslint({
      "globals": {
        "$": true,
        "jquery": true
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// setting localhost for dev environment
gulp.task('webserver', function() {
  gulp.src(__dirname)
    .pipe(webserver({
        port: 8282
    }));
});

//compresing sass files
gulp.task('sass', function () {
  return gulp.src('./scr/scss/**/*.scss')
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./app/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('build', function() {
    return gulp.src(paths.build())
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/js'))
        .on('error', function(err) {
          gutil.log(gutil.colors.red('[Error]'), err.toString());
          this.emit('end');
        })
});

gulp.task('default', ['webserver']);