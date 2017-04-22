import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import * as reducers from '../reducers'
import apiService from '../services/api/service'
import apiMiddleware from '../middleware/api'
import promiseMiddleware from '../middleware/promise'
import navMiddleware from '../middleware/nav'
import pendingMiddleware from '../middleware/pending'

const DEVTOOLS = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'
const api = apiService({ baseURL: 'http://localhost:8080/api/' })
const composeEnhancers = process.browser && window[DEVTOOLS] ? window[DEVTOOLS] : compose

export default (initialState = {}, history) => {
  const middleware = [apiMiddleware(api), promiseMiddleware, navMiddleware(history)]

  if (!process.browser) middleware.splice(1, 0, pendingMiddleware)

  return createStore(
    combineReducers(reducers),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware)
    )
  )
}
