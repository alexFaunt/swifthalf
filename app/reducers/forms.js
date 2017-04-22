import handleAction from '../redux/handle-action'
import { submit } from '../actions/form'

export default handleAction(submit, (state, { meta: id, payload }) => ({
  ...state,
  [id]: payload
}), {})
