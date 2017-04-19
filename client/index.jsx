import { h, render } from 'preact'
import { BrowserRouter } from 'react-router-dom'
import App from '../app'

const initialState = JSON.parse(decodeURIComponent(window.INITIAL_STATE))

const root = document.getElementById('app')

const Root = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

render(<Root />, root, root.lastElementChild)
