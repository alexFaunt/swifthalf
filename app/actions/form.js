import createAction from '../redux/create-action'

export const submit = createAction(
  'FORM_SUBMIT',
  (_, values) => values,
  (id) => id
)
