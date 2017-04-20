import { h, render } from 'preact'
import { BrowserRouter } from 'react-router-dom'
import App, { createStore } from '../app'

const initialState = JSON.parse(decodeURIComponent(window.INITIAL_STATE))

const root = document.getElementById('app')
const store = createStore(initialState)

render((
  <BrowserRouter>
    <App store={store} />
  </BrowserRouter>
), root, root.lastElementChild)
