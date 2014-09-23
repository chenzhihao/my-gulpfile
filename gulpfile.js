var gulp = require('gulp');
var mocha = require('gulp-mocha');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

var src = 'src/';
var dest = 'htdocs/';

var config = {
  script: {
    src: src + 'scripts/**/*.js ',
    vendor: src + 'scripts/vendor/**/*.js',
    dest: dest + 'javascript'
  },
  style: {
    src: src + '/stylesheets/**/*.scss',
    vendor: src + '/stylesheets/vendor/**/*.css',
    dest: dest + 'css'
  }
};

gulp.task('js', function () {
  return gulp.src(config.script.src, '!' + config.script.vendor)
    .pipe(gulp.dest(config.script.dest));
});

gulp.task('test', function () {
  return gulp.src(config.script.path)
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('sass', function () {
  return  gulp.src([config.style.vendor, config.style.src])
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(concat('stylesheet.css'))
    .pipe(gulp.dest(config.style.dest));
});

gulp.task('watch', function () {
  gulp.watch(config.script.src, ['js']);
  gulp.watch(config.style.src, ['sass']);
});

gulp.task('default', ['watch', 'js', 'sass' ]);