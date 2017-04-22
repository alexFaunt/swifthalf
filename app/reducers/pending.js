import handleActions from '../redux/handle-actions'
import { waitFor, clear } from '../actions/pending'
import { omit } from '../../utils/object'

export default handleActions({
  [waitFor]: (state, action) => {
    console.log('WAIT FOR', action)
    const  { payload: { id, promise } } = action
    return {...state,
    [id]: promise}
  },
  [clear]: (state, { payload }) => omit([payload], state)
}, {})
