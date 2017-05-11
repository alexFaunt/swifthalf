import createAction from '../redux/create-action'
import analytics from '../utils/analytics'

export const trackScreenView = createAction(
  'TRACK_SCREEN_VIEW',
  (screen) => analytics('screenview', screen)
)

export const trackEvent = createAction(
  'TRACK_EVENT',
  (event) => analytics('event', event)
)

/* event type eventCategory, eventLabel */
export const trackButtonClick = (event) => trackEvent({
  eventAction: 'click',
  ...event
})

/* event type eventCategory, eventLabel */
export const trackExitLink = (event) => trackButtonClick({
  eventCategory: 'Exit Link',
  transport: 'beacon',
  ...event
})
