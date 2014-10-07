var gulp = require('gulp');

require('./gulptask')([
  'javascript',
  'sass',
  'watch',
  'browserify'
]);

gulp.task('default', ['watch', 'javascript', 'sass', 'browserify' ]);