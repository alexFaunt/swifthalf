import handleAction from '../redux/handle-action'
import { setConfig } from '../actions/config'

export default handleAction(setConfig, (state, { payload }) => ({
  ...state,
  ...payload
}), {})
