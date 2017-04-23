import { h } from 'preact'

if (process.browser) require('../../../assets/images/logo.svg')

// TODO - this needs trimming and designing... lol
export default () => <img className="logo" alt="" src="./images/logo.svg" />
