const identity = (args) => args
const isFunction = (fn) => typeof fn === 'function'

const getReducerType = ({ payload, error }) => {
  if (payload && isFunction(payload.then)) return 'first'
  return error ? 'throw' : 'next'
}

export default function handleAction(actionToHandle, reducer = identity, defaultState) {
  const actionType = actionToHandle.toString()

  if (!defaultState) throw new Error(`No default state handling: ${actionType}`)
  if (!['function', 'object'].includes(typeof reducer)) throw new Error('Expected reducer to be a function or object with next and throw reducers')

  const reducerMap = isFunction(reducer)
    ? { next: reducer, throw: reducer }
    : reducer

  return (state = defaultState, action) => {
    const { type } = action
    if (type !== actionType) return state

    const targetReducer = reducerMap[getReducerType(action)]

    return targetReducer ? targetReducer(state, action) : state
  }
}
