export const differentDestinations = ({ destination, origin }, b) =>
  b.destination !== destination || b.origin !== origin

const recursivelyReplaceProps = (replace) => function replaceProps(target) {
  if (!target || typeof target === 'number' || typeof target === 'string') return target
  if (Array.isArray(target)) return target.map(replaceProps)
  return Object.keys(target).reduce((result, key) => ({
    ...result,
    [replace(key)]: replaceProps(target[key])
  }), {})
}

const stringToCamelCase = (string = '') => string.replace(/[_-]([a-z])/g, (match) => match[1].toUpperCase())

export const toCamelCase = recursivelyReplaceProps(stringToCamelCase)
