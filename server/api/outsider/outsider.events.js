/**
 * Outsider model events
 */

'use strict';

import {EventEmitter} from 'events';
var Outsider = require('./outsider.model');
var OutsiderEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OutsiderEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Outsider.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    OutsiderEvents.emit(event + ':' + doc._id, doc);
    OutsiderEvents.emit(event, doc);
  }
}

export default OutsiderEvents;
