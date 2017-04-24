import { h } from 'preact'
import ScreenReaderText from '../ScreenReaderText'

if (process.browser) require('./Rating.css')

const starWidth = 1
const starMargin = 0.2

export default ({ className = '', rating = null }) => {
  if (rating === null) return null

  // Code for right hand side alignment version
  // const whole = 5 - Math.floor(rating)
  // const fraction = rating % 1
  // const showFraction = fraction > 0.2
  // const fractionString = showFraction ? ` - ${0 + starMargin + (fraction * starWidth)}rem` : ''
  // const style = { left: `calc((${whole} * ${starWidth + starMargin}rem) ${fractionString})` }

  const whole = Math.floor(rating)
  const fraction = rating % 1
  const width = `${(whole * (starWidth + starMargin)) + (fraction * starWidth)}rem`
  const style = { width }

  // TODO - Icon strategy + star icon atom
  //
  return (
    <div className={`rating ${className}`} style={style}>
      <ScreenReaderText>Rating of { rating } stars out of five</ScreenReaderText>
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
      <div className="star" />
    </div>
  )
}
