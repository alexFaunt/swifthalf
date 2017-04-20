import { h } from 'preact'
import renderToString from 'preact-render-to-string'
import { StaticRouter } from 'react-router'
import App, { createStore } from '../../app'

const Root = ({ store, ...rest }) => (
  <StaticRouter {...rest}>
    <App store={store} />
  </StaticRouter>
)

export default async function (ctx) {
  const context = {}
  const store = createStore()

  console.log('ctx', ctx.url)
  // TODO - Promote routeconfig to json -> prefetch using match + ctx.url etc.
  // Or just render twice who gives a fuck - check apollo

  const html = renderToString(<Root location={ctx.url} context={context} store={store} />)

  await ctx.render('index', {
    html,
    state: encodeURIComponent(JSON.stringify(store.getState()))
  })
}
