import { h } from 'preact'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import Form from '../atoms/Form'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import { goToSearch } from '../../actions/search'

// TODO validate
const EntryForm = ({ origin, destination, search }) => (
  <Form id="entry" className="test" onSubmit={search}>
    <Input name="origin" placeholder="Moorgate" value={origin} />
    <Input name="destination" placeholder="Oxford Circus" value={destination} />
    <Button>Go go go!</Button>
  </Form>
)

const stateToProps = ({ forms }) => ({ ...(forms.entry || {}) })

const actionToProps = {
  search: goToSearch
}

export default connect(stateToProps, actionToProps)(EntryForm)
