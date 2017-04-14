import { getValues } from './utils/forms'
import { goToValues } from './utils/url'
import { getList } from './utils/api'
import { differentDestinations } from './utils/helpers'


export default {
  submitForm: ({ inputs }, e, { setInputs, getVenues }) => {
    e.preventDefault()

    const values = getValues(e.target)

    getVenues(values)
    goToValues(values)
    setInputs(values)
  },
  getVenues: ({ inputs }, values, { setVenues, setLoading }) => {
    if (differentDestinations(inputs, values)) {
      getList(values).then(setVenues).then(() => setLoading(false))
      setLoading(true)
    }
  },
  initForm: ({ inputs }, form, { getVenues }) => {
    getVenues(getValues(form))
  },
  setLoading: (_, loading) => ({
    loading
  }),
  setVenues: (_, venues) => ({
    venues
  }),
  setInputs: (_, inputs) => ({
    inputs
  })
}


// const setter = (prop) => (_, val) => ({ [prop]: val })
// setLoading: setter('loading'),
// setVenues: setter('venues'),
// setInputs: setter('inputs')
// TODO - generate setters
// ...Object.keys(state).reduce((setters, prop) => ({ ...setters, [`set${prop}`]: setter(prop) }))
