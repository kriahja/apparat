'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
Schema = mongoose.Schema;


var ProductSchema = new mongoose.Schema({
  name: String,
  details: String,
  picture: String,
  video: String
});

export default mongoose.model('Product', ProductSchema);
