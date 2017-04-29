import { getQuery } from '../../common/utils/url'
import getDirections from '../modules/directions'
import { getMidpoint } from '../modules/routes'
import getVenues from '../modules/venues'


// TODO do this properly
const getStatus = ({ error }) => (
  error ? 500 : 200
)

export default async (ctx) => {
  const query = getQuery(ctx.url)

  let locations = null
  let routes = null
  let midpoint = null
  let venues = null
  let error = null

  try {
    const directions = await getDirections(query)

    locations = directions.geocodedWaypoints
    routes = directions.routes

    // TODO - multi routes later.
    const [route] = routes

    midpoint = getMidpoint(route)

    venues = await getVenues(midpoint)
  }
  catch (e) {
    error = e
  }

  ctx.body = {
    locations,
    routes,
    midpoint,
    venues,
    error // TODO sanitize error?
  }
  ctx.status = getStatus(ctx.body)
}
