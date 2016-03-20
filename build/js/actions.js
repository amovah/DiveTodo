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
exports.showModal = showModal;
exports.hideModal = hideModal;
exports.loadRemember = loadRemember;
exports.moveTodo = moveTodo;
exports.moveRemember = moveRemember;
exports.saveConfig = saveConfig;
/**
 * Constants
 */

var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var LOAD_TODO = exports.LOAD_TODO = 'LOAD_TOOD';
var REMOVE_TODO = exports.REMOVE_TODO = 'REMOVE_TODO';
var COMPLETE_TODO = exports.COMPLETE_TODO = 'COMPLETE_TODO';
var UNCOMPLETE_TODO = exports.UNCOMPLETE_TODO = 'UNCOMPLETE_TODO';
var ADD_REMEMBER = exports.ADD_REMEMBER = 'ADD_REMEMBER';
var EDIT_TODO = exports.EDIT_TODO = 'EDIT_TODO';
var REMOVE_REMEMBER = exports.REMOVE_REMEMBER = 'REMOVE_REMEMBER';
var EDIT_REMEMBER = exports.EDIT_REMEMBER = 'EDIT_REMEMBER';
var SHOW_MODAL = exports.SHOW_MODAL = 'SHOW_MODAL';
var HIDE_MODAL = exports.HIDE_MODAL = 'HIDE_MODAL';
var LOAD_REMEMBER = exports.LOAD_REMEMBER = 'LOAD_REMEMBER';
var MOVE_TODO = exports.MOVE_TODO = 'MOVE_TODO';
var MOVE_REMEMBER = exports.MOVE_REMEMBER = 'MOVE_REMEMBER';
var CONFIG_REMOVE = exports.CONFIG_REMOVE = 0;
var CONFIG_KEEP = exports.CONFIG_KEEP = 1;
var CONFIG_MOVE = exports.CONFIG_MOVE = 2;
var SET_CONFIG = exports.SET_CONFIG = 'SET_CONFIG';

/**
 * Actions creators
 */

function addTodo(text, date) {
  return { type: ADD_TODO, text: text, date: date };
}

function loadTodo(todo) {
  return {
    type: LOAD_TODO,
    text: todo.text,
    completed: todo.completed,
    date: todo.date,
    id: todo.id
  };
}

function removeTodo(id) {
  return { type: REMOVE_TODO, id: id };
}

function completeTodo(id) {
  return { type: COMPLETE_TODO, id: id };
}

function uncompleteTodo(id) {
  return { type: UNCOMPLETE_TODO, id: id };
}

function addRemember(text, date) {
  return { type: ADD_REMEMBER, text: text, date: date };
}

function editTodo(text, id) {
  return { type: EDIT_TODO, text: text, id: id };
}

function removeRemember(id) {
  return { type: REMOVE_REMEMBER, id: id };
}

function editRemember(text, id) {
  return { type: EDIT_REMEMBER, text: text, id: id };
}

function showModal(modal) {
  return { type: SHOW_MODAL, modal: modal };
}

function hideModal() {
  return { type: HIDE_MODAL };
}

function loadRemember(remember) {
  return {
    type: LOAD_REMEMBER,
    text: remember.text,
    date: remember.date,
    id: remember.id
  };
}

function moveTodo(id, duration) {
  return { type: MOVE_TODO, id: id, duration: duration };
}

function moveRemember(id, duration) {
  return { type: MOVE_REMEMBER, id: id, duration: duration };
}

function saveConfig(config) {
  return { type: SET_CONFIG, config: config };
}