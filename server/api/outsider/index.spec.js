'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var outsiderCtrlStub = {
  index: 'outsiderCtrl.index',
  show: 'outsiderCtrl.show',
  create: 'outsiderCtrl.create',
  update: 'outsiderCtrl.update',
  destroy: 'outsiderCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var outsiderIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './outsider.controller': outsiderCtrlStub
});

describe('Outsider API Router:', function() {

  it('should return an express router instance', function() {
    outsiderIndex.should.equal(routerStub);
  });

  describe('GET /api/outsiders', function() {

    it('should route to outsider.controller.index', function() {
      routerStub.get
        .withArgs('/', 'outsiderCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/outsiders/:id', function() {

    it('should route to outsider.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'outsiderCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/outsiders', function() {

    it('should route to outsider.controller.create', function() {
      routerStub.post
        .withArgs('/', 'outsiderCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/outsiders/:id', function() {

    it('should route to outsider.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'outsiderCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/outsiders/:id', function() {

    it('should route to outsider.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'outsiderCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/outsiders/:id', function() {

    it('should route to outsider.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'outsiderCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
