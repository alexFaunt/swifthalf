import { h } from 'preact'

if (process.browser) require('./Rating.css')

export default ({ rating = null }) => {
  if (rating === null) return null

  return (
    <div>
      RATING STARS TODO: { rating }
    </div>
  )
}
