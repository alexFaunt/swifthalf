import { h } from 'preact'

if (process.browser) require('./default.css')

export default ({ children, className = '' }) => (
  <section className={`default ${className}`}>
    { children }
  </section>
)

export const Primary = ({ children }) => <div className="primary">{ children }</div>
export const Secondary = ({ children }) => (
  <div className="secondary">
    <section className="secondary-content">
      { children }
    </section>
  </div>
)
