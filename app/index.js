import { app } from 'hyperapp'
import state from './state'
import view from './view/App'
import actions from './actions'
import events from './events'

app({
  state,
  actions,
  events,
  view
})


// TODO subscription to url change - fire action... thats how we do it.
