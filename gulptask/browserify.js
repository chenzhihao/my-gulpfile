var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');

var config = require('../gulpconfig').browserify;

module.exports = function () {

  var browserifyThis = function (bundleConfig) {

    var bundler = browserify({
      // Required watchify args
      cache: {}, packageCache: {}, fullPaths: true,
      // Specify the entry point of your app
      entries: bundleConfig.entries,
      // Add file extentions to make optional in your requires
      extensions: config.extensions,
      // Enable source maps!
      debug: config.debug
    });

    bundler = watchify(bundler);

    bundler.on('update', bundle);

    function bundle() {
      gutil.log('watchify', gutil.colors.green(bundleConfig.entries));
      return bundler
        .bundle()
        .pipe(source(bundleConfig.outputName))
        .pipe(gulp.dest(bundleConfig.dest));
    }

    return bundle();
  };

  // Start bundling with Browserify for each bundleConfig specified
  config.bundleConfigs.forEach(browserifyThis);
}