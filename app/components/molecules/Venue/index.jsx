import { h } from 'preact'
import Rating from '../../atoms/Rating'

if (process.browser) require('./Venue.css')

// TODO time pretty print
export default ({ name, icon, formattedAddress, vicinity, rating, approxTime }) => (
  <div className="venue">
    <div className="icon-wrapper">
      <img src={icon} alt="" className="icon" />
    </div>
    <div className="content">
      <header className="header">
        <span className="name">
          { name }
        </span>
        <span className="approx-time">~ { Math.round(approxTime / 60) } mins</span>
      </header>
      <Rating className="rating-wrapper" rating={rating} />
      <span className="address">{ formattedAddress || vicinity }</span>
    </div>
  </div>
)

// TODO - break out the time into a comonent
// ~ 3min when enough space and ~3/min centered when no space
