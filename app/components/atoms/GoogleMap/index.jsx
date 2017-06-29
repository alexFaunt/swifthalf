import { h } from 'preact'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'

// TODO - bounds wont work for some reason... would be nicer.

const defaultCenter = { lat: 51.506453, lng: -0.128437 } // Default is london for now.
const GoogleMap = ({
  children,
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
    { children }
  </GoogleMapReact>
)

const stateToProps = ({ config: { google: { API_KEY, language } } }) => ({ API_KEY, language })

export default connect(stateToProps)(GoogleMap)
