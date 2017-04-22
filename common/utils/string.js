export const toCamelCase = (string = '') => (
  string.replace(/[_-]([a-z])/g, (match) => match[1].toUpperCase())
)
