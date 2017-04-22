import axios from 'axios'

// TODO refactor to be like nav
export class ApiRequest {
  constructor(args) {
    Object.assign(this, args)
  }
}

const dataMethod = (method) => ['post', 'put', 'patch'].includes(method)

const createRequest = (method, request, data = undefined, options = {}) => {
  const config = (
    typeof request === 'string'
    ? { ...options, url: request, data }
    : { ...request, url: request.url }
  )
  return new ApiRequest({ method, ...config })
}

const createRequestObject = (method) => (url, data, options = {}) => (
  dataMethod(method) ? createRequest(method, url, data, options) : createRequest(method, url, undefined, data)
)

const axiosMethods = Object.keys(axios.create())
export default axiosMethods.reduce((api, method) => ({
  ...api,
  [method]: createRequestObject(method)
}), {})
