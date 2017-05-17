import { omit } from 'common/utils/object'
import handleActions from '../redux/handle-actions'
import { waitFor, clear } from '../actions/pending'

export default handleActions({
  [waitFor]: (state, { payload: { id, promise } }) => ({
    ...state,
    [id]: promise
  }),
  [clear]: (state, { payload }) => omit([payload], state)
}, {})
