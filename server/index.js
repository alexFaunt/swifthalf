import Koa from 'koa'
import route from 'koa-route'
import path from 'path'
import staticCache from 'koa-static-cache'
import views from 'koa-views'
import renderer from './renderer'
import list from './list'

const isDev = process.env.NODE_ENV === 'production'

const app = new Koa()

app.use(views(path.join(__dirname, '/views'), {
  map: {
    html: 'handlebars'
  }
}))

const staticOptions = {
  buffer: !isDev,
  maxAge: isDev ? 0 : 60 * 60 * 24,
  gzip: true
}

app.use(staticCache(path.join(__dirname, '../public'), staticOptions))
app.use(staticCache(path.join(__dirname, '../build'), staticOptions))

app.use(route.get('/api/list', list))
app.use(route.get('*', renderer))

export default app
