import { h } from 'preact'
import renderToString from 'preact-render-to-string'
import { StaticRouter, matchPath } from 'react-router'
import { values, omit } from 'common/utils/object'
import App, { createStore, setConfig } from 'app'

const Root = ({ store, ...rest }) => (
  <StaticRouter {...rest}>
    <App store={store} />
  </StaticRouter>
)

const render = (props) => (
  renderToString(<Root {...props} />)
)

export default async function (ctx) {
  const context = {}
  const store = createStore()
  store.dispatch(setConfig({
    google: {
      API_KEY: process.env.GOOGLE_KEY,
      language: 'en'
    }
  }))

  // Fetch data through side effects - may be better to go through router,
  // but still need props n stuff, not simple. can push everything into static on fetcher
  // and use that?
  let html = render({ location: ctx.url, context, store })

  // TODO use context when needed to redirect etc

  const pending = values(store.getState().pending)

  if (pending.length) {
    // Wait for all the pending stuff
    await Promise.all(values(store.getState().pending))

    // Final html with updated state
    html = render({ location: ctx.url, context, store })
  }

  // omit pending actions and stringify the state
  const state = encodeURIComponent(JSON.stringify(omit(['pending'], store.getState())))

  await ctx.render('index', { html, state })
}
