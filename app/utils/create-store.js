import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import * as reducers from '../reducers'

const DEVTOOLS = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
const composeEnhancers = process.browser && window[DEVTOOLS] ? window[DEVTOOLS] : compose
const middleware = []

export default (initialState = {}) => (
  createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
)
