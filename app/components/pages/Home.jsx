import { h } from 'preact'
import { connect } from 'react-redux'
import Loader from '../atoms/Loader'
import EntryForm from '../molecules/EntryForm'
import Title from '../molecules/Title'
import VenueList from '../organisms/VenueList'
import { search as searchAction } from '../../actions/search'
import { getQuery } from '../../../common/utils/url'
import { isValidDirectionsQuery } from '../../../common/validation'
import { client as fetcher } from '../wrappers/fetcher'
import Template, { Primary, Secondary } from '../templates/Default'
import { createId as createSearchId } from '../../utils/search'

const Home = ({ origin, destination, pending, venues }) => (
  <Template>
    <Primary>
      <Title />
      <EntryForm origin={origin} destination={destination} />
    </Primary>
    {
      origin && destination &&
      <Secondary>
        <Loader loading={pending} />
        <VenueList origin={origin} destination={destination} venueIds={venues} />
      </Secondary>
    }
  </Template>
)

const getSearch = ({ location, searches }) => (
  searches[createSearchId(getQuery(location.search))]
)

const fetchSearch = ({ location, searches, search }) => {
  const query = getQuery(location.search)
  if (!getSearch({ location, searches }) && isValidDirectionsQuery(query)) search(query)
}

const HomeContainer = fetcher(
  fetchSearch,
  (props) => <Home {...getSearch(props)} {...getQuery(props.location.search)} />
)

const stateToProps = ({ searches }) => ({ searches })
const actionToProps = { search: searchAction }

export default connect(stateToProps, actionToProps)(HomeContainer)
