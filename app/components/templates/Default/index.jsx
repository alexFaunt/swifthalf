import { h } from 'preact'

if (process.browser) require('./default.css')

export default ({ children, className = '' }) => (
  <div className={`default ${className}`}>
    { children }
  </div>
)

export const Primary = ({ children }) => <div className="primary">{ children }</div>
export const Secondary = ({ children }) => <div className="secondary">{ children }</div>
