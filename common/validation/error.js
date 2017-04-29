class ValidationError extends Error {
  constructor(args) {
    super(args)
    Object.assign(this, args)
  }
}

export default (errors) => (
  new ValidationError({
    error: true,
    status: 400,
    statusType: 'Bad request',
    details: errors
  })
)
