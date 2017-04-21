import createAction from '../utils/redux/createAction'
import api from '../services/api'

export const search = createAction(
  'SEARCH_VENUES',
  () => api.get('list', { params: { origin: 'moorgate', destination: 'oxford circus' } })
)
