const defaultCreator = () => ({})

export default (type, customPayload, metaCreator) => {
  const payloadCreator = customPayload || defaultCreator

  const actionCreator = (...args) => {
    const error = args[0] instanceof Error

    return {
      type,
      payload: error ? args[0] : payloadCreator(...args),
      meta: metaCreator ? metaCreator(...args) : {},
      error
    }
  }

  actionCreator.toString = () => type

  return actionCreator
}
