import { h } from 'preact'

export default ({ children, type = 'submit' }) => (
  <button type={type} className="TODO">{ children }</button>
)
