import { h } from 'hyperapp'
import { StyleSheet, css } from 'aphrodite'

const styles = StyleSheet.create({
  input: {
    display: 'block',
    marginBottom: '20px'
  }
})

export default (props, children) => {
  const { type = 'submit' } = props || {}
  return <button type={type} class={css(styles.input)}>{ children }</button>
}
