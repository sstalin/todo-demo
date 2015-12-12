/* global describe, beforeEach, it, expect, inject, module */
'use strict';

describe('TodoApi', function () {
  var service;

  beforeEach(module('todo'));

  beforeEach(inject(function (TodoApi) {
    service = TodoApi;
  }));

  it('should equal TodoApi', function () {
    expect(service).toBeDefined();
  });
});
