import { h } from 'preact'

if (process.browser) require('./ScreenReaderText.css')

export default ({ children }) => <span className="screen-reader-text">{ children }</span>
