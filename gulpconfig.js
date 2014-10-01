module.exports = (function () {
  var src = 'src/'
    , dest = 'htdocs/';
  return {
    script: {
      src: src + 'scripts/**/*.js ',
      vendor: ['jquery.js'],
      dest: dest + 'javascript'
    },
    style: {
      src: src + '/stylesheets/**/*.scss',
      vendor: src + '/stylesheets/vendor/**/*.css',
      dest: dest + 'css'
    }
  }
})();

