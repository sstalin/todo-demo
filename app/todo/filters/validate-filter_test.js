/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('validate', function () {
  var mockData;
  beforeEach(module('todo'));

  beforeEach(function () {
    mockData = [
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
        "userId": '',
        "id": 3,
        "title": "Default Title",
        "items": []
      }

    ]
  });

  it('should filter out none', inject(function ($filter) {
    mockData[2].userId = 4;
    mockData[2].items.push({
      "title": "dlcmldmcl oecmeomc",
      "completed": true
    });
    expect($filter('validate')(mockData).length).toEqual(3);
  }));

  it('should filter out 1', inject(function ($filter) {
    expect($filter('validate')(mockData).length).toEqual(2);
  }));

  it('should filter out 1', inject(function ($filter) {
    mockData[2].userId = 4;

    expect($filter('validate')(mockData).length).toEqual(2);
  }));
});
