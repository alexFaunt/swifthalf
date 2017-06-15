import { h, Component } from 'preact'
import { connect } from 'react-redux'

const mapboxgl = process.browser ? require('mapbox-gl') : {}
if (process.browser) require('./Mapbox.css')

// Client only? fallback? image? kill self? what what?
class Mapbox extends Component {
  componentDidMount() {
    mapboxgl.accessToken = this.props.API_KEY
    this.map = new mapboxgl.Map({
      container: this.element,
      center: [-122.420679, 37.772537],
      zoom: 13,
      style: 'mapbox://styles/mapbox/streets-v9'
    })
  }

  render() {
    // TODO clientOnly wrapper from mend
    if (!process.browser) return null

    const ref = (element) => {
      this.element = element
    }

    return <div className="mapbox" ref={ref} />
  }
}


const stateToProps = ({ config: { mapbox: { API_KEY } } }) => ({ API_KEY })

export default connect(stateToProps)(Mapbox)
