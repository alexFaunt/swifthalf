import { h } from 'preact'
import { StaticRouter } from 'react-router'
import App from '../../app'

export default ({ store, ...rest }) => (
  <StaticRouter {...rest}>
    <App store={store} />
  </StaticRouter>
)
