import { h } from 'preact'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ScreenView from './components/functional/ScreenView'
import Home from './components/pages/Home'

if (process.browser) {
  require('./components/styles/index.css')
  require('../assets/images/favicon.ico')
}

export { default as createStore } from './redux/create-store'
export { setConfig } from './actions/config'

export default ({ store }) => (
  <Provider store={store}>
    <div>
      <ScreenView />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  </Provider>
)
