import { h } from 'preact'

if (process.browser) require('./Section.css')

export default (props) => <section className="section" {...props} />
