import { onChange, getQuery } from './utils/url'

export default {
  loaded: [
    (_, { setInputs, getVenues }) => onChange(() => {
      const { origin, destination } = getQuery()
      const values = { origin, destination }
      setInputs(values)
      getVenues(values)
    }),
    (_, { getVenues }) => getVenues()
  ]
}
