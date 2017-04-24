import { h } from 'preact'
import { connect } from 'react-redux'
import Venue from '../../molecules/Venue'
import { H2 } from '../../atoms/typography'

if (process.browser) require('./venue-list.css')

const VenueList = ({ origin, destination, venueIds, venues }) => {
  if (!venueIds) return null

  if (!venueIds.length) return <p>No venues found =( sorry!</p>

  return (
    <div>
      <H2 className="venue-list-header">Between { origin } and { destination }</H2>
      <ul className="venue-list">
        { venueIds.map((id) => <li className="venue-list-item"><Venue key={id} {...venues[id]} /></li>) }
      </ul>
    </div>
  )
}

const stateToProps = ({ venues }) => ({ venues })

export default connect(stateToProps)(VenueList)
