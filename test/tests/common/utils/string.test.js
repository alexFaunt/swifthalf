import { toCamelCase } from '../../../../common/utils/string'

describe('String utility', () => {
  describe('#toCamelCase', () => {
    it('camelCases underscored strings', () => {
      expect(toCamelCase('test_string')).to.equal('testString')
    })
    it('camelCases hiphenated strings', () => {
      expect(toCamelCase('test-string')).to.equal('testString')
    })
  })
})
