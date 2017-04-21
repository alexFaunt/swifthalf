import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import * as reducers from '../reducers'
import apiService from '../services/api/service'
import apiMiddleware from '../middleware/api'
import promiseMiddleware from '../middleware/promise'

const DEVTOOLS = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
const api = apiService({ baseURL: 'http://localhost:8080/api/' })
const composeEnhancers = process.browser && window[DEVTOOLS] ? window[DEVTOOLS] : compose
const middleware = [apiMiddleware(api), promiseMiddleware]

export default (initialState = {}) => (
  createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
)
