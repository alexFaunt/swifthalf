import { h, Component } from 'preact'
import { getQuery } from '../../../utils/url'

export default class Input extends Component {
  componentDidMount() {
    window.addEventListener('popstate', this.onPopState)
  }

  componentWillUnmount() {
    if (!process.browser) return
    window.removeEventListener('popstate', this.onPopState)
  }

  onPopState = (e) => {
    if (!process.browser) return
    setTimeout(() => {
      const newValues = getQuery(window.location)
      const value = newValues[this.props.name]
      if (value) this.ref.value = value
    }, 10)
  }

  render({ name, ...props }) {
    const ref = (el) => {
      this.ref = el
    }

    return <input ref={ref} className="test" name={name} id={name} {...props} />
  }
}
