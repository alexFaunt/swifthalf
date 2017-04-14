import { h } from 'hyperapp'
// import { StyleSheet, css } from 'aphrodite'
//
// const styles = StyleSheet.create({
//   input: {
//     display: 'block',
//     marginBottom: '20px'
//   }
// })

export default ({ loading }) => (loading ? <div>LOADING</div> : null)
