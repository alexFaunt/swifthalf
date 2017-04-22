import { h, render } from 'preact'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import App, { createStore } from '../app'

const initialState = JSON.parse(decodeURIComponent(window.INITIAL_STATE))

const root = document.getElementById('app')
const history = createHistory()
const store = createStore(initialState, history)

render((
  <Router history={history}>
    <App store={store} />
  </Router>
), root, root.lastElementChild)
