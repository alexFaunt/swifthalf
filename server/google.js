import { createClient } from '@google/maps'
import { toCamelCase } from '../common/utils/object'

const client = createClient({
  key: process.env.GOOGLE_KEY
})

// TODO - cache EVERYTHING

export const getDirections = ({ origin, destination }) => new Promise((resolve, reject) => {
  const props = {
    origin,
    destination,
    mode: 'transit',
    region: 'uk'
  }

  client.directions(props, (err, { json }) => {
    if (err || json.status !== 'OK') reject(err || json) // TODO - standard error?

    resolve(toCamelCase(json))
  })
})


export const getPlaces = (location) => new Promise((resolve, reject) => {
  // Can either do bounds between two places, and order by how good they are
  // Or rankby distance around a location

  const props = {
    location,
    // radius: 1000,
    rankby: 'distance',
    type: 'bar' // TODO - other venues
  }

  client.placesNearby(props, (err, { json }) => {
    if (err || json.status !== 'OK') reject(err || json) // TODO - standard error?

    resolve(toCamelCase(json))
  })
})
