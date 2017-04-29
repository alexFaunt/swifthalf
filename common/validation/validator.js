import validate from 'validate.js'
import error from './error'

export default (constraints) => (values) => {
  const errors = validate(values, constraints)
  return errors ? error(errors) : null
}
