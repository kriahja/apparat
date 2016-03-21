'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var catSchema = new mongoose.Schema
({
  name: String,
  age: Number
});

export default mongoose.model('Cat', catSchema);
