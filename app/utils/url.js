import { decode, encode } from 'querystring'
import { differentDestinations } from './helpers'

export const getQuery = () => {
  const { search } = window.location
  return decode(search.substring(1, search.length))
}

export const makeQuery = (params) => `?${encode(params)}`

let notify

export const goToValues = (values) => {
  if (differentDestinations(values, getQuery())) {
    window.history.pushState({}, `Between ${values.origin} and ${values.destination}`, makeQuery(values))
    notify()
  }
}

// HAHAHAHA hack.
export const onChange = (fun) => {
  notify = fun
  window.addEventListener('popstate', notify)
}
