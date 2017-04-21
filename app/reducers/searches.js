import handleAction from '../utils/redux/handleAction'
import { search } from '../actions/search'

// Try () => ({})
export default handleAction(search, (state, { payload, meta }) => ({
  first() {
    console.log('first');
    return {}
  },
  next() {
    console.log('next');
    return {}
  },
  throw() {
    console.log('throw');
    return {}
  }
}), {})
