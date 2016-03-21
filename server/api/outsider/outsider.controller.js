/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/outsiders              ->  index
 * POST    /api/outsiders              ->  create
 * GET     /api/outsiders/:id          ->  show
 * PUT     /api/outsiders/:id          ->  update
 * DELETE  /api/outsiders/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Outsider = require('./outsider.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Outsiders
export function index(req, res) {
  Outsider.find({}).populate('owner', 'name email')
    .populate('orders.product')
    .execAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Outsider from the DB
export function show(req, res) {
  Outsider.findById(req.params.id).populate('owner', 'name email')
    .populate('orders.product')
    .execAsync()
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Outsider in the DB
export function create(req, res) {
  Outsider.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Outsider in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Outsider.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Outsider from the DB
export function destroy(req, res) {
  Outsider.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
