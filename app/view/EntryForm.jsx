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

export default ({ from, to, onSubmit, onCreate }) => (
  <form class={css(styles.form)} onSubmit={onSubmit} onCreate={onCreate}>
    <Input name="from" placeholder="Moorgate" value={from} />
    <Input name="to" placeholder="Oxford Circus" value={to} />
    <Button>Go go go!</Button>
  </form>
)
