import { h } from 'preact'
import { H1 } from '../../atoms/typography'
import Logo from '../../atoms/Logo'

if (process.browser) require('./title.css')

export default () => (
  <H1 className="title">
    <Logo className="logo" />
    <span>Swift Half</span>
  </H1>
)
