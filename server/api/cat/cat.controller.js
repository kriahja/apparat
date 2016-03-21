'use strict';

var mongoose = require('mongoose');
var Cat = require('./cat.model');

export function getAll(req, res) {
  Cat.findAsync()
    .then(function(cat) {
      res.status(200).json(cat);
    })
    .catch(function(err) {
      return res.status(500).send(err);
    });
}

export function create(req, res) {
  Cat.createAsync(req.body)
    .then(function(cat) {
      res.status(200).json(cat);
    })
    .catch(function(err) {
      return res.status(500).send(err);
    });
  //res.json(req.body);
};
