/* eslint-disable react/no-multi-comp */
import { h, Component } from 'preact'

export const universal = (fetch, Comp) => (
  class UniversalFetcher extends Component {
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

export const client = (fetch, Comp) => (
  class ClientFetcher extends Component {
    componentDidMount() {
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
