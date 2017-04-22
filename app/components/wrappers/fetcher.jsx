import { h, Component } from 'preact'

export default (fetch, Comp) => (
  class Fetcher extends Component {
    componentWillMount() {
      fetch(this.props)
    }

    componentWillUpdate(nextProps) {
      fetch(nextProps)
    }

    render(props) {
      return <Comp {...props} />
    }
  }
)
