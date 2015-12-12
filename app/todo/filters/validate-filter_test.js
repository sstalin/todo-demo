/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('validate', function () {
  beforeEach(module('todo'));

  it('should filter our numbers not greater than 3', inject(function ($filter) {
    var mockData = [
      {
        "userId": "",
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "userId": 1,
        "id": 2,
        "title": "",
        "completed": false
      },
      {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      }
    ];

    expect($filter('validate')(mockData).length).toEqual(2);
  }));
});
