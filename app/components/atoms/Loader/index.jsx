import { h } from 'preact'
import ScreenReaderText from '../ScreenReaderText'

if (process.browser) require('./Loader.css')

const Loading = () => (
  <div class="loader">
    <ScreenReaderText>Loading</ScreenReaderText>
    <div class="loader-dot loader-left circle">
      <div class="loader-dot loader-pulse circle" />
      <div class="loader-dot loader-pulse circle" />
    </div>
    <div class="loader-dot loader-right circle">
      <div class="loader-dot loader-pulse circle" />
      <div class="loader-dot loader-pulse circle" />
    </div>
  </div>
)

export default ({ loading }) => (loading ? <Loading /> : null)
