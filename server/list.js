// TODO move this shit and organize
import { decode } from 'querystring'
import logger from './utils/logger'

import { getDirections, getPlaces } from './google'
// get directions between two places - (geolocate them?)
// Find the midpoint
// do a search around that midpoint

export default async (ctx) => {
  logger.log('GETTING DIRECTIONS', decode(ctx.url.split('?')[1]))

  // TODO validate the input and check it's not fucked up
  let directions
  try {
    logger.log('WAITING FOR DIREACTIONS')
    directions = await getDirections(decode(ctx.url.split('?')[1]))
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
