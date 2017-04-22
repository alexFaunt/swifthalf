module.exports = {
  plugins: [
    require('postcss-simple-vars'),
    require('postcss-cssnext')({ browsers: ['iOS >= 7', 'Android >= 4', 'Chrome >= 43'] }),
  ]
}
