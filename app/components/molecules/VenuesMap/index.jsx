import { h } from 'preact'
import { connect } from 'react-redux'
import GoogleMap from '../../atoms/GoogleMap'

const Thing = () => <div>test</div>

const VenuesMap = ({ venues, ...props }) => (
  <GoogleMap {...props}>
    {
      venues.map(({ geometry: { location } }) => (<Thing {...location} />))
    }
  </GoogleMap>
)


// TODO reselect to move this map to selector for memoization
const Container = ({ venueIds, venues, props }) => (
  venueIds && venueIds.length
  ? <VenuesMap venues={venueIds.map((id) => venues[id])} {...props} />
  : null
)

const stateToProps = ({ venues }) => ({ venues })

export default connect(stateToProps)(Container)
