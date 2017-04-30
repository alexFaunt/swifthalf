import { h } from 'preact'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'

const Thing = () => (
  <div>Thing</div>
)
// TODO - bounds wont work for some reason... would be nicer.

const defaultCenter = { lat: 51.506453, lng: -0.128437 } // Default is london for now.
const GoogleMap = ({
  API_KEY,
  language,
  center = defaultCenter,
  zoom = 15
}) => (
  <GoogleMapReact
    bootstrapURLKeys={{
      key: API_KEY,
      language
    }}
    center={center}
    defaultZoom={zoom}
  >
    <Thing
      lat={59.955413}
      lng={30.337844}
      text={'Kreyser Avrora'}
    />
  </GoogleMapReact>
)

const stateToProps = ({ config: { google: { API_KEY, language } } }) => ({ API_KEY, language })

export default connect(stateToProps)(GoogleMap)
