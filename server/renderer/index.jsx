import { h } from 'preact'
import renderToString from 'preact-render-to-string'
import Root from './Root'

export default async function (ctx) {
  const context = {}
  console.log('ctx', ctx.url)
  const html = renderToString(<Root location={ctx.url} context={context} />)

  await ctx.render('index', {
    html,
    state: encodeURIComponent(JSON.stringify({ test: 'state' }))
  })
}
