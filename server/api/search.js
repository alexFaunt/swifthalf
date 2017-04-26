import { getQuery } from '../../common/utils/url'
import logger from '../utils/logger'
import { directions as getDirections, places as getPlaces } from '../modules/google'
import { isValidDirectionsQuery } from '../../common/validation'

export default async (ctx) => {
  const query = getQuery(ctx.url)
  if (!isValidDirectionsQuery(query)) {
    ctx.status = 400
    return
  }

  let directions
  try {
    logger.log('WAITING FOR DIREACTIONS')
    directions = await getDirections(getQuery(ctx.url))
    logger.log('GOT EM')
  }
  catch (e) {
    // TODO  500
    logger.log('Error DIRECTIONS', e)
    ctx.status = 500
    return
  }
  logger.log('GOT DIRECTIONS')

  // TODO - multi routes later.
  const { routes: [route] } = directions

  if (!route) {
    ctx.body = {
      routes: [],
      venues: []
    }
    logger.log('NO ROUTE')
    return
  }

  const { copyrights, legs: [{ duration, steps }] } = route

  // TODO IF duration < 20 mins just switch to walking dirs

  // duration in seconds
  const midTime = (duration.value / 2)

  let cumulativeTime = 0
  const middleStepIndex = steps.findIndex((step) => {
    cumulativeTime += step.duration.value
    return cumulativeTime > midTime
  })

  const { endLocation, duration: { value: stepDuration } } = steps[middleStepIndex - 1]
  logger.log('MIDDLE STEP', middleStepIndex - 1, 'of', steps.length)

  try {
    const places = await getPlaces(endLocation)
    ctx.body = {
      routes: directions.routes,
      // TODO - time to the step exit + estimate time based on distance of venue search
      venues: places.results.map((venue) => ({ ...venue, approxTime: stepDuration / 2 }))
    }
  }
  catch (e) {
    // TODO
    ctx.status = 500
    ctx.body = {}
    logger.log('Error PLACES', e)
  }
}
