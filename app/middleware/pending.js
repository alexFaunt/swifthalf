import { waitFor, clear } from '../actions/pending'

export default function pendingMiddleware() {
  return (next) => (action) => {
    next(action)

    if (!action.payload || !action.payload.then) return
    const id = `${action.type}:${Date.now()}`

    const promise = action.payload
      .then(() => next(clear(id)))
      .catch(() => next(clear(id)))

    next(waitFor({ id, promise }))
  }
}
