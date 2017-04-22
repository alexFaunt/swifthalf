import { decode } from 'querystring'

import { getDirections, getPlaces } from './google'
// get directions between two places - (geolocate them?)
// Find the midpoint
// do a search around that midpoint

export default async (ctx) => {
  console.log('GETTING DIRECTIONS', decode(ctx.url.split('?')[1]))

  // TODO validate the input and check it's not fucked up
  let directions
  try {
    console.log('WAITING FOR DIREACTIONS')
    directions = await getDirections(decode(ctx.url.split('?')[1]))
    console.log('GOT EM')
  }
  catch (e) {
    // TODO  500
    console.log('NO DIRECTIONS', e)
    ctx.body = []
    return
  }
  console.log('GOT DIRECTIONS')

  // TODO - multi routes later.
  const { routes: [route] } = directions

  if (!route) {
    ctx.body = {
      routes: [],
      venues: null
    }
    console.log('NO ROUTE')
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

  const { endLocation } = steps[middleStepIndex - 1]
  console.log('MIDDLE STEP', middleStepIndex - 1, 'of', steps.length)

  try {
    const places = await getPlaces(endLocation)
    ctx.body = places.results.map(({ name }) => name)
  }
  catch (e) {
    // TODO  500
    ctx.body = []
    console.log('NO PLACES', e)
  }

  // {
  //   routes,
  //   copyrights,
  //   venues
  // }
}
