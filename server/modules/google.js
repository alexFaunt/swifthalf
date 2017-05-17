import { createClient } from '@google/maps'
import { toCamelCase } from 'common/utils/object'

if (!process.env.GOOGLE_KEY) {
  throw new Error('No GOOGLE_KEY supplied - check the .env file')
}

const client = createClient({
  key: process.env.GOOGLE_KEY
})

export default (method) => (props) => new Promise((resolve, reject) => {
  client[method](props, (err, { json }) => {
    if (err || json.status !== 'OK') reject(err || json) // TODO - what error do i want to send?

    resolve(toCamelCase(json))
  })
})
