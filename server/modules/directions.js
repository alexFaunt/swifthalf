import google from './google'
import { validateDirectionsQuery } from '../../common/validation'

const directions = google('directions')

export default ({ origin, destination }) => {
  const error = validateDirectionsQuery({ origin, destination })
  if (error) return Promise.reject(error)

  return directions({
    origin,
    destination,
    mode: 'transit',
    region: 'uk'
  })
}
