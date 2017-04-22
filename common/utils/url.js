import { decode } from 'querystring'

export const getQuery = ({ search = '?' }) => decode(search.split('?')[1])
