import handleAction from './handleAction'

const reduceReducers = (...reducers) => (
  (previous, current) => reducers.reduce((p, r) => r(p, current), previous)
)

export default (handlers, defaultState) => {
  const reducers = Object.keys(handlers).map((type) =>
    handleAction(
      type,
      handlers[type],
      defaultState
    )
  )
  const reducer = reduceReducers(...reducers)
  return (state, action) => reducer(state, action)
}
