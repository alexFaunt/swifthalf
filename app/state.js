import { getQuery } from './utils/url'

const { origin = null, destination = null } = getQuery()

export default {
  loading: false,
  inputs: { origin, destination },
  venues: null
}
