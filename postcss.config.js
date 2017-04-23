module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({ browsers: ['iOS >= 7', 'Android >= 4', 'Chrome >= 43'] })
  ]
}
