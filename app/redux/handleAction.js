const identity = (args) => args
const isFunction = (fn) => typeof fn === 'function'

const getReducerType = ({ payload, error }) => {
  if (payload && isFunction(payload.then)) return 'pending'
  return error ? 'failure' : 'success'
}

export default function handleAction(actionToHandle, reducer = identity, defaultState) {
  if (!actionToHandle) throw new Error('No action supplied to handle')
  const actionType = actionToHandle.toString()

  if (!defaultState) throw new Error(`No default state handling: ${actionType}`)
  if (!['function', 'object'].includes(typeof reducer)) throw new Error('Expected reducer to be a function or object with next and throw reducers')

  const reducerMap = isFunction(reducer)
    ? { success: reducer, failure: reducer }
    : reducer

  return (state = defaultState, action) => {
    const { type } = action
    if (type !== actionType) return state

    const targetReducer = reducerMap[getReducerType(action)]

    return targetReducer ? targetReducer(state, action) : state
  }
}
