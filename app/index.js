import { app } from 'hyperapp'
import state from './state'
import view from './view/App'
import actions from './actions'

app({
  state,
  actions,
  view
})
