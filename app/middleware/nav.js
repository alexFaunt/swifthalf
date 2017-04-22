import { push } from '../actions/nav'

const types = [push.toString()]

export default function navMiddlewareCreator(history) {
  return function navMiddleware() {
    return (next) => (action) => {
      const { type, payload: destination, meta: method } = action

      if (types.includes(type)) history[method](destination)

      return next(action)
    }
  }
}
