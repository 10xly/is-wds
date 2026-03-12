/* eslint-disable */

const assert = require('assert')
const esValueFixtures = require('es-value-fixtures')
const concatArrays = require('array-concat')
let booleansPlusNonbooleans = concatArrays(esValueFixtures.booleans, esValueFixtures.nonBooleans)
const isWDS = require('../index')
describe('isWDS', function () {
  it('should return true if the string "WDS" is inputted', function() {
    assert(isWDS('WDS'))
    assert(isWDS('WDS') === true)
  })
  it('should return false if anything else is inputted', function() {
    booleansPlusNonbooleans.every(value => assert(!isWDS(value)))
  })
})