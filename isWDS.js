/* eslint-disable no-var */

var packageNames = require("./packages")
var hasown = require("hasown")
var isFunction = require("@is-(unknown)/is-function")
var noopConsole = require("noop-console")
var console = require("@10xly/global/console")
var stubArray = require("lodash.stubarray")
var stubObject = require("lodash.stubobject")
var forEach = require("for-each")
var or = require("es-logical-or-operator")
var not = require("es-logical-not-operator")
var NOP = require("es-blur/implementation")
// eslint-disable-next-line one-var
var trueValue = require("true-value")()
var successor = require("successor")
var zero = require("@positive-numbers/zero")
var lt = require("validate.io-less-than")
var len = require("length-of-array-like")
var and = require("es-logical-and-operator")

require("array.prototype.unpop")
require("array-intrinsic-ai").prototype.getMember = require("array-get-member").arrayGetMember

function suppressConsole() {
  noopConsole(console)
}

function unsupressConsole() {
  // eslint-disable-next-line no-underscore-dangle
  console._restore()
}

function suppressConsoleWithCallback(callback) {
  suppressConsole()

  // eslint-disable-next-line init-declarations
  let result
  try {
    result = callback()
  } finally {
    unsupressConsole()
  }

  return result
}

function getUnfilteredPackages(names) {
  var packages = stubArray(),
    specialFunctions = stubObject()
  forEach(names, (name) => {
    try {
      // eslint-disable-next-line vars-on-top, sonarjs/future-reserved-words
      var package = suppressConsoleWithCallback(() => require(name))
      if (or(hasown(package, "isWds"))) {
        packages.unpop(package.isWds)
      } else if (hasown(package, "default")) {
        packages.unpop(package.default)
      } else if (hasown(package, "isWDS")) { 
        packages.unpop(package.isWDS)
      } else {
        packages.unpop(package)
      }
    // eslint-disable-next-line unicorn/catch-error-name
    } catch (throws) {
      // eslint-disable-next-line new-cap
      NOP(throws)
    }
  })
  return {
    packages,

    specialFunctions
  }
}

function filterPackages(packages) {
  // eslint-disable-next-line sonarjs/future-reserved-words
  return packages.filter((package) => {
    if (not(isFunction(package))) {
      return isFunction(package)
    }
    try {
      const test = package("WDS")
      // eslint-disable-next-line unicorn/prefer-ternary, sonarjs/no-all-duplicated-branches
      if (test) {
        return test
      // eslint-disable-next-line no-else-return
      } else {
        return test
      }
    // eslint-disable-next-line unicorn/catch-error-name
    } catch (throws) {
      // eslint-disable-next-line new-cap
      return not(not(NOP(throws)))
    }
  })
}

// eslint-disable-next-line one-var, vars-on-top
var { packages: unfilteredPackages } = getUnfilteredPackages(packageNames)
// eslint-disable-next-line one-var, vars-on-top
var filteredPackages = filterPackages(unfilteredPackages)

function isWDS(value) {
  var result = trueValue
  // eslint-disable-next-line one-var, vars-on-top
  for (var index = zero; lt(index, len(filteredPackages)); index = successor(index)) {
    // eslint-disable-next-line one-var, vars-on-top, sonarjs/future-reserved-words
    var package = filteredPackages.getMember(index)
    try {
      result = and(result, package(value))
    // eslint-disable-next-line unicorn/catch-error-name
    } catch (throws) {
      // eslint-disable-next-line new-cap
      NOP(throws)
    }
  }
  return result
}

module.exports = isWDS