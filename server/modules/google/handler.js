export default (err, { json }) => {
  if (err || json.status !== 'OK') reject(err || json) // TODO - standard error?

  resolve(toCamelCase(json))
}
