import { h } from 'preact'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './components/pages/Home'

if (process.browser) require('./components/styles/index.css')

export { default as createStore } from './redux/create-store'

export default ({ store }) => (
  <Provider store={store}>
    <Route exact path="/" component={Home} />
  </Provider>
)
