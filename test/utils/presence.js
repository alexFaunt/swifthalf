export const exists = (wrapper) => {
  const wrapperLength = wrapper.node && wrapper.length > 0
  expect(wrapperLength).to.be.true
}

export const notExists = (wrapper) => {
  expect(!wrapper.node || wrapper.length === 0).to.be.true
}
