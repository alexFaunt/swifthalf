import { h } from 'preact'
import Rating from '../../atoms/Rating'

if (process.browser) require('./Venue.css')

export default ({ name, icon, formattedAddress, vicinity, rating }) => (
  <div className="venue">
    <img src={icon} alt="" className="icon" />
    <div class="content">
      <header className="header">
        <span className="name">
          { name }
        </span>
        <Rating rating={rating} />
      </header>
      <div>
        <span>{ formattedAddress || vicinity }</span>
      </div>
    </div>
  </div>
)
