import { ApiRequest } from '../services/api/'

export default function testing(apiService) {
  return function apiMiddleware() {
    return (next) => (action) => {
      if (action.payload && action.payload instanceof ApiRequest) {
        return next({
          ...action,
          payload: apiService(action.payload)
        })
      }

      return next(action)
    }
  }
}
