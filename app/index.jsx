import { h } from 'preact'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

export { default as createStore } from './utils/create-store'

export default ({ store }) => (
  <Provider store={store}>
    <div>
      <Switch>
        <Route exact path="/" component={() => <div>Home</div>} />
        <Route path="/about" component={() => <div>About</div>} />
      </Switch>
    </div>
  </Provider>
)
