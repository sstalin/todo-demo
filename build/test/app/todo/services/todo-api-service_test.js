/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TodoApi', function () {
  var service, $httpBackend, handler, mock = [
    {
      "userId": "1",
      "id": 1,
      "title": "Default Title",
      "items": [
        {
          "title": "delectus aut autem",
          "completed": false
        }
      ]
    },
    {
      "userId": 1,
      "id": 2,
      "title": "Default Title",
      "items": [
        {
          "title": "delectus aut autem",
          "completed": true
        },
        {
          "title": "dlcmldmcl oecmeomc",
          "completed": true
        }
      ]
    },
    {
      "userId": 1,
      "id": 3,
      "title": "Default Title",
      "items": [
        {
          "title": "delectus aut autem",
          "completed": false
        }
      ]
    }
  ];

  beforeEach(module('todo'));
  beforeEach(module('ngMock'));

  beforeEach(inject(function (TodoApi, $injector) {
    service = TodoApi;
    $httpBackend = $injector.get('$httpBackend');
    handler = $httpBackend.whenGET('data/todos.json').respond(mock);
  }));

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should equal TodoApi', function () {
    expect(service).toBeDefined();
  });

  it("it should make Api call", function () {
    var todos = service.get();
    expect(todos.length).toBe(0);
    $httpBackend.flush();
    expect(todos.length).toBe(3);
  });

  it("should set and get active Todo", function () {
    service.setActive(mock[0]);
    expect(service.getActive(1).id).toBe(1);
  });
});
