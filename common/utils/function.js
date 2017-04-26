export function debounce(func, wait) {
  let timeout
  return function debounced(...args) {
    const context = this
    const later = () => {
      timeout = null
      func.apply(context, args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)))
