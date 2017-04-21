import { h } from 'preact'
import Form from '../atoms/Form'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

const handler = (fn) => (e) => {
  e.preventDefault()
  fn(e)
}

export default ({ origin, destination, onSubmit }) => (
  <Form className="test" onSubmit={handler(onSubmit)}>
    <Input name="origin" placeholder="Moorgate" value={origin} />
    <Input name="destination" placeholder="Oxford Circus" value={destination} />
    <Button>Go go go!</Button>
  </Form>
)
