import createAction from '../redux/create-action'

export const push = createAction(
  'NAV_PUSH',
  (destination) => destination,
  () => 'push'
)

export const replace = createAction(
  'NAV_REPLACE',
  (destination) => destination,
  () => 'replace'
)
