const setBrowser = (val) => {
  process.browser = val
}

export default (tests) => {
  describe('on the browser', () => {
    before(() => setBrowser(true))
    after(() => setBrowser(false))
    return tests()
  })
}
