import { h } from 'preact'
import Venue from '../atoms/Venue'

export default ({ venues }) => {
  if (!venues) return null

  return (
    <div>
      { venues.map((venue) => <Venue name={venue} />) }
    </div>
  )
}
