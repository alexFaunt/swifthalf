import { getValues } from './utils/forms'
import { goToValues } from './utils/url'
import { getList } from './utils/api'

export default {
  submitForm: ({ inputs }, e) => {
    e.preventDefault()
    goToValues(getValues(e.target))
  },
  getVenues: ({ inputs }, _, { setVenues, setLoading }) => {
    getList(inputs).then(setVenues).then(() => setLoading(false))
    setLoading(true)
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
