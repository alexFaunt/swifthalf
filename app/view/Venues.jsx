import { h } from 'hyperapp'
// import { StyleSheet, css } from 'aphrodite'
//
// const styles = StyleSheet.create({
//   form: {}
// })

export default ({ venues }) => (
  <div>
    {
      venues.map((venue) => <p>{ venue }</p>)
    }
  </div>
)
