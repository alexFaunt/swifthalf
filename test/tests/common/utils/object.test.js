import {
  omit,
  pick,
  values,
  toCamelCase,
  invert
} from '../../../../common/utils/object'

describe('object utilities', () => {
  describe('#omit', () => {
    it('removes specified properties from target', () => {
      const target = { prop: 'to-be-removed', prop2: 'to-stay' }
      expect(omit(['prop'], target)).to.deep.equal({ prop2: 'to-stay' })
    })
  })

  describe('#pick', () => {
    it('returns specified properties from target as an object', () => {
      const target = { prop: 'to-be-removed', prop2: 'to-stay' }
      expect(pick(['prop2'], target)).to.deep.equal({ prop2: 'to-stay' })
    })
  })

  describe('#values', () => {
    it('returns the values of an object as an array', () => {
      const target = { prop: 'val', prop2: 'val2' }
      expect(values(target)).to.deep.equal(['val', 'val2'])
    })
  })

  describe('#toCamelCase', () => {
    it('returns a string without modification', () => {
      expect(toCamelCase('test_string')).to.equal('test_string')
    })

    it('returns a number without any modifications', () => {
      expect(toCamelCase(10)).to.equal(10)
    })

    it('camel cases an object\'s keys', () => {
      const camelCasedObject = toCamelCase({
        test_object_key: 'test_object_value'
      })

      expect(camelCasedObject.test_object_key).to.not.exist
      expect(camelCasedObject.testObjectKey).to.exist
    })

    it('does NOT camel case an object\'s values if they are strings', () => {
      const camelCasedObject = toCamelCase({
        test_object_key: 'test_object_value'
      })

      expect(camelCasedObject.testObjectKey).to.equal('test_object_value')
    })

    it('reflects null values', () => {
      expect(toCamelCase(null)).to.equal(null)
    })

    it('reflects undefined values', () => {
      expect(toCamelCase(undefined)).to.equal(undefined)
    })

    it('handles empty arrays', () => {
      expect(toCamelCase([])).to.deep.equal([])
    })

    it('handles empty objects', () => {
      expect(toCamelCase({})).to.deep.equal({})
    })

    it('converts objects inside arrays', () => {
      const targetArray = [[{ two_levels_deep: 'testing_stuff' }], [[{ three_levels_deep: 'testing_stuff2' }]]]
      const expectedArray = [[{ twoLevelsDeep: 'testing_stuff' }], [[{ threeLevelsDeep: 'testing_stuff2' }]]]
      expect(toCamelCase(targetArray)).to.deep.equal(expectedArray)
    })

    it('iterates through deeply nested objects', () => {
      const targetObject = { top_level: { second_level_key: 'second_level_value' } }
      const expectedObject = { topLevel: { secondLevelKey: 'second_level_value' } }
      expect(toCamelCase(targetObject)).to.deep.equal(expectedObject)
    })

    it('handles all other options at once', () => {
      const targetObject = {
        top_level: {
          second_level_key: 'second_level_value',
          second_level_array: ['array_value'],
          undefined_value: undefined,
          null_array: [null, null, 'third_value']
        },
        array_of_objects: [{ inside_array: 'inside_array_value' }]
      }
      const expectedObject = {
        topLevel: {
          secondLevelKey: 'second_level_value',
          secondLevelArray: ['array_value'],
          undefinedValue: undefined,
          nullArray: [null, null, 'third_value']
        },
        arrayOfObjects: [{ insideArray: 'inside_array_value' }]
      }

      expect(toCamelCase(targetObject)).to.deep.equal(expectedObject)
    })
  })

  describe('#invert', () => {
    const targetObject = { test: 'testing', test2: 123 }
    const expectedObject = { testing: 'test', 123: 'test2' }

    it('inverts an object', () => {
      expect(invert(targetObject)).to.deep.equal(expectedObject)
    })
  })
})
