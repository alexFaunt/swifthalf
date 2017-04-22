import handleAction from '../redux/handle-action'
import { search } from '../actions/search'

// Try () => ({})
export default handleAction(search, {
  pending: (state, { meta: { origin, destination } }) => ({
    ...state,
    [`${origin}|${destination}`]: {
      pending: true,
      venues: null
    }
  }),
  success: (state, { payload, meta: { origin, destination } }) => ({
    ...state,
    [`${origin}|${destination}`]: {
      pending: false,
      venues: payload
    }
  }),
  failure: (state, { payload, meta: { origin, destination } }) => ({
    ...state,
    [`${origin}|${destination}`]: {
      pending: false,
      error: true,
      message: payload
    }
  })
}, {})
