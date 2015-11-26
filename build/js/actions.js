'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.loadTodo = loadTodo;
exports.removeTodo = removeTodo;
exports.completeTodo = completeTodo;
exports.uncompleteTodo = uncompleteTodo;
exports.addRemember = addRemember;
exports.editTodo = editTodo;
exports.removeRemember = removeRemember;
exports.editRemember = editRemember;
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var LOAD_TODO = exports.LOAD_TODO = 'LOAD_TOOD';
var REMOVE_TODO = exports.REMOVE_TODO = 'REMOVE_TODO';
var COMPLETE_TODO = exports.COMPLETE_TODO = 'COMPLETE_TODO';
var UNCOMPLETE_TODO = exports.UNCOMPLETE_TODO = 'UNCOMPLETE_TODO';
var ADD_REMEMBER = exports.ADD_REMEMBER = 'ADD_REMEMBER';
var EDIT_TODO = exports.EDIT_TODO = 'EDIT_TODO';
var REMOVE_REMEMBER = exports.REMOVE_REMEMBER = 'REMOVE_REMEMBER';
var EDIT_REMEMBER = exports.EDIT_REMEMBER = 'EDIT_REMEMBER';

function addTodo(text) {
  return { type: ADD_TODO, text: text };
}

function loadTodo(todo) {
  return { type: LOAD_TODO, text: todo.text, completed: todo.completed };
}

function removeTodo(index) {
  return { type: REMOVE_TODO, index: index };
}

function completeTodo(index) {
  return { type: COMPLETE_TODO, index: index };
}

function uncompleteTodo(index) {
  return { type: UNCOMPLETE_TODO, index: index };
}

function addRemember(text) {
  return { type: ADD_REMEMBER, text: text };
}

function editTodo(text, index) {
  return { type: EDIT_TODO, text: text, index: index };
}

function removeRemember(index) {
  return { type: REMOVE_REMEMBER, index: index };
}

function editRemember(text, index) {
  return { type: EDIT_REMEMBER, text: text, index: index };
}
