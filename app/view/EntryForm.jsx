import { h } from 'hyperapp'
import { StyleSheet, css } from 'aphrodite'
import Input from './Input'
import Button from './Button'

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(75% - 80px)',
    margin: 'auto',
    minWidth: '200px',
    maxWidth: '400px',
    padding: '40px'
  }
})

export default ({ origin, destination, onSubmit }) => (
  <form class={css(styles.form)} onSubmit={onSubmit}>
    <Input name="origin" placeholder="Moorgate" value={origin} />
    <Input name="destination" placeholder="Oxford Circus" value={destination} />
    <Button>Go go go!</Button>
  </form>
)
