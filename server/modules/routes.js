export const getMidpoint = (route) => {
  // TODO more than one leg...
  const { legs: [{ duration, steps }] } = route

  // TODO IF duration < 20 mins just switch to walking dirs
  // duration in seconds
  const midTime = (duration.value / 2)

  let cumulativeTime = 0
  const middleStepIndex = steps.findIndex((step) => {
    cumulativeTime += step.duration.value
    return cumulativeTime > midTime
  })

  return steps[middleStepIndex - 1].endLocation
}
