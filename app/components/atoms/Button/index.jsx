import { h } from 'preact'

if (process.browser) require('./button.css')

export default ({ children, style = 'primary', type = 'submit' }) => (
  <button type={type} className={`button button-${style}`}>{ children }</button>
)
