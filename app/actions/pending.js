import createAction from '../redux/create-action'

export const waitFor = createAction('AWAIT_PENDING_ACTION')
export const clear = createAction('CLEAR_PENDING_ACTION')
