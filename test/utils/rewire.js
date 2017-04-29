/* eslint-disable no-underscore-dangle */
export default (funct, dependency, replacement) => {
  before(() => funct.__Rewire__(dependency, replacement))
  after(() => funct.__ResetDependency__(dependency))
}
