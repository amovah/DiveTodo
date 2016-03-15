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
exports.moveToNextRemember = moveToNextRemember;
exports.moveToPreviousRemember = moveToPreviousRemember;
exports.moveToNextTodo = moveToNextTodo;
exports.moveToPreviousTodo = moveToPreviousTodo;
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
var MOVE_TO_NEXT_REMEMBER = exports.MOVE_TO_NEXT_REMEMBER = 'MOVE_TO_NEXT_REMEMBER';
var MOVE_TO_PREVIOUS_REMEMBER = exports.MOVE_TO_PREVIOUS_REMEMBER = 'MOVE_TO_PREVIOUS_REMEMBER';
var MOVE_TO_NEXT_TODO = exports.MOVE_TO_NEXT_TODO = 'MOVE_TO_NEXT_TODO';
var MOVE_TO_PREVIOUS_TODO = exports.MOVE_TO_PREVIOUS_TODO = 'MOVE_TO_PREVIOUS_TODO';

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

function moveToNextRemember(id) {
  return { type: MOVE_TO_NEXT_REMEMBER, id: id };
}

function moveToPreviousRemember(id) {
  return { type: MOVE_TO_PREVIOUS_REMEMBER, id: id };
}

function moveToNextTodo(id) {
  return { type: MOVE_TO_NEXT_TODO, id: id };
}

function moveToPreviousTodo(id) {
  return { type: MOVE_TO_PREVIOUS_TODO, id: id };
}