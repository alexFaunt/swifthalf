import { spy } from 'sinon'
import createAction from 'app/redux/create-action'
import apiMiddleware from 'app/middleware/api'
import apiUtil from 'app/services/api'
import resetSpies from '../../../utils/reset-spies'

describe('Api middleware', () => {
  const nextSpy = spy()
  const apiServiceSpy = spy()
  let middleware
  before(() => {
    middleware = apiMiddleware(apiServiceSpy)()(nextSpy)
  })
  afterEach(() => resetSpies([nextSpy, apiServiceSpy]))

  describe('when supplied an action without an ApiRequest', () => {
    const nonApiAction = { type: 'TEST', payload: { data: 'true' } }

    it('passes on the provided action', () => {
      middleware(nonApiAction)
      expect(nextSpy).to.be.calledWith(nonApiAction)
    })

    it('does NOT call the apiService', () => {
      middleware(nonApiAction)
      expect(apiServiceSpy).to.not.be.called
    })
  })

  describe('when supplied an action', () => {
    describe('with a get ApiRequest object', () => {
      const apiActionCreator = createAction('TEST_ACTION', () => apiUtil.get('testurl'))
      const apiAction = apiActionCreator()

      it('does not pass on the provided action', () => {
        middleware(apiAction)
        expect(nextSpy).to.not.be.calledWith(apiAction)
      })

      it('calls the api service supplied', () => {
        middleware(apiAction)
        expect(apiServiceSpy).to.be.calledOnce
      })
    })
  })
})
