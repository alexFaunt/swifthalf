import createAction from '../redux/createAction'

export const submit = createAction(
  'FORM_SUBMIT',
  (_, values) => values,
  (id) => id
)
