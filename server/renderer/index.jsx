import { h } from 'preact'
import renderToString from 'preact-render-to-string'
import { StaticRouter } from 'react-router'
import { decode } from 'querystring'
import App, { createStore } from '../../app'

const Root = ({ store, ...rest }) => (
  <StaticRouter {...rest}>
    <App store={store} />
  </StaticRouter>
)

const getList = ({ origin, destination }) => {
  return { } // TODO - this should be some kind of module that the API calls into
}

const prefetchList = (url) => {
  const { origin, destination } = decode(url.split('?')[1])
  return origin && destination ? getList({ origin, destination }) : null
}

export default async function (ctx) {
  const context = {}
  const store = createStore()

  // TODO long term - route config + match + generic data prefetching
  const data = prefetchList(ctx.url)
  // TODO - dispatch this data into the right place in the store.
  console.log('data', data)

  const html = renderToString(<Root location={ctx.url} context={context} store={store} />)

  await ctx.render('index', {
    html,
    state: encodeURIComponent(JSON.stringify(store.getState()))
  })
}
