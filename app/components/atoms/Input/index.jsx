import { h, Component } from 'preact'
import { getQuery } from '../../../../common/utils/url'
// TODO - ALL COMPONETNS SHOULD BE PURECOMPONETNS
if (process.browser) require('./Input.css')

export default class Input extends Component {
  componentDidMount() {
    window.addEventListener('popstate', this.onPopState)
  }

  componentWillUnmount() {
    if (!process.browser) return
    window.removeEventListener('popstate', this.onPopState)
  }

  onPopState = () => {
    if (!process.browser) return
    setTimeout(() => {
      const newValues = getQuery(window.location.search)
      const value = newValues[this.props.name]
      if (value) this.ref.value = value
    }, 10)
  }

  render({ name, ...props }) {
    const ref = (el) => {
      this.ref = el
    }

    return <input ref={ref} className="input" name={name} id={name} {...props} />
  }
}
