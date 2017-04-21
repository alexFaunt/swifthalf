import { h } from 'preact'
import Form from '../atoms/Form'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

export default ({ origin, destination, onSubmit }) => (
  <Form className="test" onSubmit={onSubmit}>
    <Input name="origin" placeholder="Moorgate" value={origin} />
    <Input name="destination" placeholder="Oxford Circus" value={destination} />
    <Button>Go go go!</Button>
  </Form>
)
