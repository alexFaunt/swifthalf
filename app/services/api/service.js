import axios from 'axios'

const TIMEOUTERROR = { message: 'Gateway Timeout', status: 504 }
const isTimeout = ({ code }) => code === 'ECONNABORTED'

export default ({ baseURL, headers }) => {
  const axiosInstance = axios.create({
    baseURL,
    headers
  })

  axiosInstance.interceptors.response.use(
    (res) => res.data,
    (error) => Promise.reject(isTimeout(error) ? { ...error, response: TIMEOUTERROR } : error)
  )

  return (request) => axiosInstance({
    ...request,
    timeout: 5000
  })
}
