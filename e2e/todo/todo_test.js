/* global describe, beforeEach, it, browser, expect */
'use strict';

var TodoPagePo = require('./todo.po');

describe('Todo page', function () {
  var todoPage;

  beforeEach(function () {
    todoPage = new TodoPagePo();
    browser.get('/#/todo');
  });

  it('should say TodoCtrl', function () {
    expect(todoPage.heading.getText()).toEqual('todo');
    expect(todoPage.text.getText()).toEqual('TodoCtrl');
  });
});
