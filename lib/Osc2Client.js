// Copyright 2015 Bubl Technology Inc.
//
// Licensed under the MIT license
// <LICENSE-MIT or http://opensource.org/licenses/MIT>.
// This file may not be copied, modified, or distributed
// except according to those terms.

'use strict'

var OscClient = require('./OscClient')
var makeHttpRequest = require('./makeHttpRequest')
var commandsExecute = require('./commandsExecute')

var Osc2Client = function () {
  this.constructor.apply(this, Array.prototype.slice.call(arguments))
}

Osc2Client.prototype = new OscClient()

/*********************************************************/
/* OSC Level 2 Commands Endpoints                        */
/*********************************************************/

// OSC2 Command Reset
Osc2Client.prototype.reset = function () {
  return commandsExecute.apply(this, ['camera.reset'])
}

module.exports = Osc2Client
