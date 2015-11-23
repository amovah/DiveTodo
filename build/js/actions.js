'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.loadTodo = loadTodo;
exports.removeTodo = removeTodo;
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var LOAD_TODO = exports.LOAD_TODO = 'LOAD_TOOD';
var REMOVE_TODO = exports.REMOVE_TODO = 'REMOVE_TODO';

function addTodo(text) {
  return { type: ADD_TODO, text: text };
}

function loadTodo(todo) {
  return { type: LOAD_TODO, text: todo.text, completed: todo.completed };
}

function removeTodo(index) {
  return { type: REMOVE_TODO, index: index };
}
