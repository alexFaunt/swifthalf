import { h } from 'preact'

if (process.browser) require('./default.css')

export default ({ className = '', ...props }) => (
  <main className={`default ${className}`} {...props} />
)

// TODO - sort this god damn bs out.
export const Primary = (props) => <div className="template-primary" {...props} />

export const Background = (props) => <div className="template-background" {...props} />

export const Secondary = ({ children }) => (
  <div className="template-secondary">
    <div className="template-secondary-content">
      { children }
    </div>
  </div>
)
