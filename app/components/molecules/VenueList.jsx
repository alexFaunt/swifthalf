import { h } from 'preact'
import Venue from '../atoms/Venue'

export default ({ venues }) => (
  <div>
    { venues.map((venue) => <Venue name={venue} />) }
  </div>
)
