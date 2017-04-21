export default function promiseMiddleware({ dispatch }) {
  return (next) => (action) => {
    const { payload } = action
    if (payload && payload.then) {
      payload.then(
        (result) => dispatch({ ...action, payload: result }),
        (error) => dispatch({ ...action, payload: error, error: true })
      )
    }

    return next(action)
  }
}
