export const getValues = (form) => [...form.elements].reduce((vals, { type, name, value }) => (
  type === 'submit' ? vals : { ...vals, [name]: value }
), {})
