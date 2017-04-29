require('babel-register')()

const chai = require('chai')

chai.use(require('sinon-chai'))

global.expect = chai.expect

require('./utils/global').setMarkup('<html><body></body></html>')
