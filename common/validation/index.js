const isString = (val) => typeof val === 'string'
const longerThan = (length) => (val) => val && val.length > length

const all = (...validators) => (val) => !validators.find((isValid) => !isValid(val))

const isValidSearchString = all(isString, longerThan(3))

export const isValidDirectionsQuery = ({ origin, destination }) => (
  isValidSearchString(origin) && isValidSearchString(destination)
)
