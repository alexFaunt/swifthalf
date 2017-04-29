const reset = (spies) => spies.forEach((spy) => spy.reset())

const isSpy = (spy = {}) => typeof spy.reset === 'function'

export default (target) => {
  if (Array.isArray(target)) return reset(target)

  const toReset = Object.keys(target).reduce((spies, key) => {
    const item = target[key]
    return isSpy(item) ? spies.concat(item) : spies
  }, [])

  return reset(toReset)
}
