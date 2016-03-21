'use strict';

var app = require('../..');
import request from 'supertest';

var newOutsider;

describe('Outsider API:', function() {

  describe('GET /api/outsiders', function() {
    var outsiders;

    beforeEach(function(done) {
      request(app)
        .get('/api/outsiders')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          outsiders = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      outsiders.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/outsiders', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/outsiders')
        .send({
          name: 'New Outsider',
          info: 'This is the brand new outsider!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOutsider = res.body;
          done();
        });
    });

    it('should respond with the newly created outsider', function() {
      newOutsider.name.should.equal('New Outsider');
      newOutsider.info.should.equal('This is the brand new outsider!!!');
    });

  });

  describe('GET /api/outsiders/:id', function() {
    var outsider;

    beforeEach(function(done) {
      request(app)
        .get('/api/outsiders/' + newOutsider._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          outsider = res.body;
          done();
        });
    });

    afterEach(function() {
      outsider = {};
    });

    it('should respond with the requested outsider', function() {
      outsider.name.should.equal('New Outsider');
      outsider.info.should.equal('This is the brand new outsider!!!');
    });

  });

  describe('PUT /api/outsiders/:id', function() {
    var updatedOutsider;

    beforeEach(function(done) {
      request(app)
        .put('/api/outsiders/' + newOutsider._id)
        .send({
          name: 'Updated Outsider',
          info: 'This is the updated outsider!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOutsider = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOutsider = {};
    });

    it('should respond with the updated outsider', function() {
      updatedOutsider.name.should.equal('Updated Outsider');
      updatedOutsider.info.should.equal('This is the updated outsider!!!');
    });

  });

  describe('DELETE /api/outsiders/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/outsiders/' + newOutsider._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when outsider does not exist', function(done) {
      request(app)
        .delete('/api/outsiders/' + newOutsider._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
