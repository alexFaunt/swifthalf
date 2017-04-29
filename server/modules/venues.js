import getPlaces from './places'

export default async (location) => {
  const places = await getPlaces(location)

  return places.results.map((venue) => ({ ...venue }))
}
