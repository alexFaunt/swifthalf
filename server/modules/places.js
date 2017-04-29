import google from './google'

const directions = google('placesNearby')

export default (location) => (
  directions({
    location,
    // radius: 1000,
    rankby: 'distance',
    type: 'bar' // TODO - other venue types
  })
)

// Can either do bounds between two places, and order by how good they are
// Or rankby distance around a location
