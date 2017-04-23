import handleAction from '../redux/handle-action'
import { search } from '../actions/search'
import { createId } from '../utils/search'

export default handleAction(search, {
  pending: (state, { meta }) => ({
    ...state,
    [createId(meta)]: {
      pending: true,
      venues: null
    }
  }),
  success: (state, { payload: { routes, venues = [] }, meta }) => ({
    ...state,
    [createId(meta)]: {
      pending: false,
      routes,
      venues: venues.map(({ id }) => id)
    }
  }),
  failure: (state, { payload: { status, data }, meta }) => ({
    ...state,
    [createId(meta)]: {
      pending: false,
      error: true,
      status,
      message: data
    }
  })
}, {})
