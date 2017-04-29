import validator from './validator'

const searchTerm = {
  presence: true,
  length: {
    minimum: 3,
    message: 'must be at least 3 characters'
  }
}

const directionsQuery = {
  origin: searchTerm,
  destination: searchTerm
}

export const validateDirectionsQuery = validator(directionsQuery)
