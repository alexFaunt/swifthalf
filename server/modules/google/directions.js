import request from './request'

const directions = request('directions')

export default ({ origin, destination }) => (
  directions({
    origin,
    destination,
    mode: 'transit',
    region: 'uk'
  })
)
