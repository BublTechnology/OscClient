// Copyright 2015 Bubl Technology Inc.
//
// Licensed under the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>.
// This file may not be copied, modified, or distributed
// except according to those terms.

function bublOscError (err) {
  this.name = 'bublOscError'
  this.message = err || 'OSC has encountered an error'
  this.stack = (new Error()).stack
}

bublOscError.prototype = new Error

try {
  throw new bublOscError()
} catch (e) {
  console.log(e.name)
  console.log(e.message)
}

try {
  throw new bublOscError()
}

module.exports = bublOscError
