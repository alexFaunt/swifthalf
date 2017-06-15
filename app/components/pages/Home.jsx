import { h } from 'preact'
import { connect } from 'react-redux'
import { getQuery } from 'common/utils/url'
import { validateDirectionsQuery } from 'common/validation'
import Loader from '../atoms/Loader'
import EntryForm from '../molecules/EntryForm'
import Title from '../molecules/Title'
import VenueList from '../organisms/VenueList'
import { search as searchAction } from '../../actions/search'
import { client as fetcher } from '../wrappers/fetcher'
import Template, { Background, Primary, Secondary } from '../templates/Default'
import { createId as createSearchId } from '../../utils/search'
import Section from '../atoms/Section'
import Mapbox from '../atoms/Mapbox'

// Use venues for <VenuesMap venues={} />
// Use https://www.mapbox.com/mapbox-gl-js/example/geojson-markers/ to add markers
const Home = ({ origin, destination, pending, venues, midpoint }) => (
  <Template>
    <Background>
      <Mapbox center={midpoint} />
    </Background>
    <Primary>
      <Section>
        <Title />
        <EntryForm origin={origin} destination={destination} />
      </Section>
    </Primary>
    {
      origin && destination &&
      <Secondary>
        <Loader loading={pending} />
      </Secondary>
    }
  </Template>
)

const getSearch = ({ location, searches }) => (
  searches[createSearchId(getQuery(location.search))]
)

const fetchSearch = ({ location, searches, search }) => {
  const query = getQuery(location.search)
  if (!getSearch({ location, searches }) && !validateDirectionsQuery(query)) search(query)
}

const HomeContainer = fetcher(
  fetchSearch,
  (props) => <Home {...getSearch(props)} {...getQuery(props.location.search)} />
)

const stateToProps = ({ searches }) => ({ searches })
const actionToProps = { search: searchAction }

export default connect(stateToProps, actionToProps)(HomeContainer)
