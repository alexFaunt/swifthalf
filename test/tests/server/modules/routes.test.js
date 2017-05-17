import { getMidpoint } from 'server/modules/routes'
import suitablebreak1 from '../../../mocks/directions/suitablebreak1.json'

describe('Routes module', () => {
  describe('#getMidpoint', () => {
    it('returns midpoint for suitablebreak1', () => {
      expect(getMidpoint(suitablebreak1.routes[0])).to.deep.equal({
        lat: 51.50100699999999,
        lng: -0.124907
      })
    })
  })
})
