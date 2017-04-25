import route from 'koa-route'
import list from './list'

export default [
  route.get('/api/list/', list)
]
