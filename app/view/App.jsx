import { h } from 'hyperapp'
import EntryForm from './EntryForm'
import Searched from './Searched'
import Venues from './Venues'
import Loader from './Loader'

export default ({ inputs, venues, loading }, { submitForm }) => (
  <div>
    <div>Header</div>
    <EntryForm onSubmit={submitForm} {...inputs} />
    <Loader loading={loading} />
    { venues && <Searched {...inputs} /> }
    { venues && <Venues venues={venues} /> }
  </div>
)
