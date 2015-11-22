'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.loadTodo = loadTodo;
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var LOAD_TODO = exports.LOAD_TODO = 'LOAD_TOOD';

function addTodo(text) {
  return { type: ADD_TODO, text: text };
}

function loadTodo(todo) {
  return { type: LOAD_TODO, text: todo.text, completed: todo.completed };
}
