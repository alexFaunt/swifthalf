import { h } from 'preact'
import { connect } from 'react-redux'
import Loader from '../atoms/Loader'
import EntryForm from '../molecules/EntryForm'
import VenueList from '../molecules/VenueList'
import { search as searchAction } from '../../actions/search'
import { getQuery } from '../../../utils/url'
import fetcher from '../utils/fetcher'

const Home = ({ origin, destination, pending, venues }) => (
  <div>
    <div>Header</div>
    <EntryForm />
    <Loader loading={pending} />
    { origin && destination && <p>Between { origin } and { destination }</p> }
    { venues && <VenueList venues={venues} /> }
  </div>
)

const getSearchId = ({ origin, destination }) => `${origin}|${destination}`

const getSearch = ({ location, searches }) => (
  searches[getSearchId(getQuery(location))]
)

const fetchSearch = ({ location, searches, search }) => {
  if (!getSearch({ location, searches })) search(getQuery(location))
}

const HomeContainer = fetcher(
  fetchSearch,
  (props) => <Home {...getSearch(props)} {...getQuery(props.location)} />
)

const stateToProps = ({ searches }) => ({ searches })
const actionToProps = { search: searchAction }

export default connect(stateToProps, actionToProps)(HomeContainer)
