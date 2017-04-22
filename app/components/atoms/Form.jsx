import { h } from 'preact'
import { connect } from 'react-redux'
import { submit } from '../../actions/form'

const getValues = (form) => [...form.elements].reduce((vals, { type, name, value }) => (
  type === 'submit' ? vals : { ...vals, [name]: value }
), {})

const handler = (formSubmit, fn) => (e) => {
  e.preventDefault()
  const values = getValues(e.target)
  formSubmit(e.target.id, values)
  fn(values)
}

const Form = ({ children, id, formSubmit, onSubmit, className = '', ...props }) => (
  <form id={id} className={`TODO ${className}`} onSubmit={handler(formSubmit, onSubmit)} {...props}>
    { children }
  </form>
)

const stateToProps = () => ({})
const actionToProps = {
  formSubmit: submit
}

export default connect(stateToProps, actionToProps)(Form)
