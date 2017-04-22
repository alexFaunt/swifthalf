const identity = (args) => (args)

export default (type, customPayload, metaCreator) => {
  const payloadCreator = customPayload || identity

  const actionCreator = (...args) => {
    const error = args[0] instanceof Error

    return {
      type,
      payload: error ? args[0] : payloadCreator(...args),
      meta: metaCreator ? metaCreator(...args) : null,
      error
    }
  }

  actionCreator.toString = () => type

  return actionCreator
}
