import { h } from 'preact'

if (process.browser) require('./typography.css')

export const H1 = ({ children, className = '', ...props }) => (
  <h1 className={`h1 ${className}`} {...props}>{ children }</h1>
)

export const H2 = ({ children, className = '', ...props }) => (
  <h2 className={`h2 ${className}`} {...props}>{ children }</h2>
)

export const H3 = ({ children, className = '', ...props }) => (
  <h3 className={`h3 ${className}`} {...props}>{ children }</h3>
)

export const P = ({ children, className, ...props }) => (
  <p className={`p ${className}`} {...props}>{ children }</p>
)
