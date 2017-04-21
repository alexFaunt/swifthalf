import { h } from 'preact'

export default ({ children, className = '' }) => (
  <form className={`TODO ${className}`}>{ children }</form>
)
