/* eslint-disable no-var */
var factory = require('./factory')
// eslint-disable-next-line one-var
var isWds = factory()
var isTruthy = require("is-truthy-x")

module.exports = function isWDS(value) {
  return isTruthy(isWds(value))
}

module.exports.default = module.exports
module.exports.isWDS = module.exports.default