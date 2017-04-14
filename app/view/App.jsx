import { h } from 'hyperapp'
import EntryForm from './EntryForm'
import Searched from './Searched'
import Venues from './Venues'
import Loader from './Loader'

export default ({ inputs, venues, loading }, { submitForm, initForm }) => (
  <div>
    <div>Header</div>
    <EntryForm onSubmit={submitForm} onCreate={initForm} {...inputs} />
    <Loader loading={loading} />
    <Searched {...inputs} />
    <Venues venues={venues} />
  </div>
)
