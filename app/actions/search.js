import createAction from '../redux/create-action'
import api from '../services/api'
import { push } from './nav'

export const search = createAction(
  'SEARCH_VENUES',
  (params) => api.get('search', { params }),
  (params) => params
)

export const goToSearch = ({ origin, destination }) => push(`/?origin=${origin}&destination=${destination}`)
