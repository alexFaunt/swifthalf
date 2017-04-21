import { h } from 'preact'

export default ({ children, className = '', ...props }) => (
  <form className={`TODO ${className}`} {...props} >{ children }</form>
)
