import createAction from '../redux/createAction'

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
