import handleAction from '../redux/handle-action'
import { search } from '../actions/search'

export default handleAction(search, {
  success: (state, { payload: { venues = [] } }) => (
    venues.reduce((combined, venue) => ({
      ...combined,
      [venue.id]: venue
    }), state)
  )
}, {})
