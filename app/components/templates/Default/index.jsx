import { h } from 'preact'

if (process.browser) require('./default.css')

export default ({ children, className = '' }) => (
  <main className={`default ${className}`}>
    { children }
  </main>
)

export const Primary = ({ children }) => <section className="primary">{ children }</section>
export const Secondary = ({ children }) => (
  <div className="secondary">
    <section className="secondary-content">
      { children }
    </section>
  </div>
)
