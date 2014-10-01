var gulp = require('gulp');

require('./gulptask')([
  'javascript',
  'sass',
  'watch'
]);

gulp.task('default', ['watch', 'javascript', 'sass' ]);