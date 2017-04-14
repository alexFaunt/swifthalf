import { makeQuery } from './url'

export const getList = (values) => {
  const query = makeQuery(values)
  return fetch(`/api/list${query}`)
    .then((data) => data.json())
}
