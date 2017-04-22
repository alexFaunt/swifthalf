import { ApiRequest } from '../services/api/'

export default function apiMiddlewareCreator(apiService) {
  return function apiMiddleware() {
    return (next) => (action) => {
      if (action.payload && action.payload instanceof ApiRequest) {
        console.log('API REQUEST SEE', action)
        return next({
          ...action,
          payload: apiService(action.payload)
        })
      }

      return next(action)
    }
  }
}
