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

// OSC2 COMMAND RESET
Osc2Client.prototype.reset = function () {
  return commandsExecute.apply(this, ['camera.reset'])
}

// OSC2 COMMAND LISTFILES
Osc2Client.prototype.listFiles = function (fileType, startPosition, entryCount, maxThumbsize) {
    return commandsExecute.apply(this, ['camera.listFiles', {fileType: fileType, startPosition: startPosition, entryCount: entryCount, maxThumbsize: maxThumbsize}])
}

// OSC2 COMMAND STARTCAPTURE
Osc2Client.prototype.startCapture = function () {
  return commandsExecute.apply(this, ['camera.startCapture'])
}

// OSC2 COMMAND STOPCAPTURE
Osc2Client.prototype.stopCapture = function () {
  return commandsExecute.apply(this, ['camera.stopCapture'])
}

module.exports = Osc2Client