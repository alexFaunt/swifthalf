import route from 'koa-route'
import search from './search'

export default [
  route.get('/api/search/', search)
]
