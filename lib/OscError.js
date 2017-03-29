// Copyright 2015 Bubl Technology Inc.
//
// Licensed under the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>.
// This file may not be copied, modified, or distributed
// except according to those terms.

function OscError (err) {
  this.name = err.name
  this.state = err.state
  this.error = {
    code: err.error.code,
    message: `OscError where ${err.name} failed with ${err.error.code}: ${err.error.message}`
  }
}

OscError.prototype = new Error

module.exports = OscError