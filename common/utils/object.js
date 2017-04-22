import { toCamelCase as stringToCamelCase } from './string'

const recursivelyReplaceProps = (replace) => function replaceProps(target) {
  if (!target || typeof target === 'number' || typeof target === 'string') return target
  if (Array.isArray(target)) return target.map(replaceProps)
  return Object.keys(target).reduce((result, key) => ({
    ...result,
    [replace(key)]: replaceProps(target[key])
  }), {})
}

export const toCamelCase = recursivelyReplaceProps(stringToCamelCase)

export const values = (object) => Object.keys(object).map((key) => object[key])

export const omit = (keys, object) => Object.keys(object).reduce((result, key) => (
  keys.includes(key) ? result : { ...result, [key]: object[key] }
), {})

export const pick = (items = [], target = {}) => items.reduce((picked, key) => (
  target[key] ? { ...picked, [key]: target[key] } : picked
), {})
