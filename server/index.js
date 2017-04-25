import Koa from 'koa'
import route from 'koa-route'
import path from 'path'
import staticCache from 'koa-static-cache'
import views from 'koa-views'
import renderer from './renderer'
import api from './api'

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

app.use(staticCache(path.join(__dirname, '../build'), staticOptions))
//
// const forEach = (obj, fn) => (
//   Object.keys(obj).forEach((key) => {
//     fn(key, obj[key])
//   })
// )
// forEach(api, (url, handler) => {
//   app.use(route.get(`/api/${url}`, handler))
// })

api.forEach((apiRoute) => {
  app.use(apiRoute)
})

// app.use(route.get('/api/*', api))
app.use(route.get('*', renderer))

export default app
