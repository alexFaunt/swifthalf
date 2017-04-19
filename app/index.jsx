import { h } from 'preact'
import { Switch, Route } from 'react-router-dom'

export default ({ store }) => (
  <div>
    <Switch>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route path="/about" component={() => <div>About</div>} />
    </Switch>
  </div>
)
