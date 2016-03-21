'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose')),
Schema = mongoose.Schema;

var OutsiderSchema = new mongoose.Schema({
  Store: String,
  year: Number,
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  iconurl: String,
  orders: [{
    product:
    {
      type: Schema.ObjectId,
      ref: 'Product'
    }
  }]
});

export default mongoose.model('Outsider', OutsiderSchema);
