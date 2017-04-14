import { getQuery } from './utils/url'

const { from = null, to = null } = getQuery()

export default {
  loading: false,
  inputs: { from, to },
  venues: null
}
