import { decode, encode } from 'querystring'
import { differentDestinations } from './helpers'

export const getQuery = () => {
  const { search } = window.location
  return decode(search.substring(1, search.length))
}

export const makeQuery = (params) => `?${encode(params)}`

export const goToValues = (values) => {
  if (differentDestinations(values, getQuery())) {
    window.history.pushState({}, `Between ${values.to} and ${values.from}`, makeQuery(values))
  }
}
