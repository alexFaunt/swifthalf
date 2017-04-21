import { h } from 'preact'
import { connect } from 'react-redux'
import Loader from '../atoms/Loader'
import EntryForm from '../molecules/EntryForm'
import VenueList from '../molecules/VenueList'
import { search as searchAction } from '../../actions/search'

// TODO - populate these via connect
const Home = ({ venues, loading, search, entryTodo, todo }) => (
  <div>
    <div>Header</div>
    <EntryForm onSubmit={search} {...entryTodo} />
    <Loader loading={loading} />
    { venues && <p>Between { todo.origin } and { todo.destination }</p> }
    { venues && <VenueList venues={venues} /> }
  </div>
)

const stateToProps = ({ venues, entryTodo, todo }) => ({ venues, entryTodo, todo })

const actionsToProps = {
  search: searchAction
}

export default connect(stateToProps, actionsToProps)(Home)
