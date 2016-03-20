/**
 * Constants
 */

export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO = 'LOAD_TOOD';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const UNCOMPLETE_TODO = 'UNCOMPLETE_TODO';
export const ADD_REMEMBER = 'ADD_REMEMBER';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_REMEMBER = 'REMOVE_REMEMBER';
export const EDIT_REMEMBER = 'EDIT_REMEMBER';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const LOAD_REMEMBER = 'LOAD_REMEMBER';
export const MOVE_TODO = 'MOVE_TODO';
export const MOVE_REMEMBER = 'MOVE_REMEMBER';
export const CONFIG_REMOVE = 0;
export const CONFIG_KEEP = 1;
export const CONFIG_MOVE = 2;
export const SET_CONFIG = 'SET_CONFIG';

/**
 * Actions creators
 */

export function addTodo(text, date) {
  return { type: ADD_TODO, text, date };
}

export function loadTodo(todo) {
  return {
    type: LOAD_TODO,
    text: todo.text,
    completed: todo.completed,
    date: todo.date,
    id: todo.id
  };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, id };
}

export function completeTodo(id) {
  return { type: COMPLETE_TODO, id };
}

export function uncompleteTodo(id) {
  return { type: UNCOMPLETE_TODO, id };
}

export function addRemember(text, date) {
  return { type: ADD_REMEMBER, text, date };
}

export function editTodo(text, id) {
  return { type: EDIT_TODO, text, id };
}

export function removeRemember(id) {
  return { type: REMOVE_REMEMBER, id };
}

export function editRemember(text, id) {
  return { type: EDIT_REMEMBER, text, id };
}

export function showModal(modal) {
  return { type: SHOW_MODAL, modal };
}

export function hideModal() {
  return { type: HIDE_MODAL };
}

export function loadRemember(remember) {
  return {
    type: LOAD_REMEMBER,
    text: remember.text,
    date: remember.date,
    id: remember.id
  };
}

export function moveTodo(id, duration) {
  return { type: MOVE_TODO, id, duration };
}

export function moveRemember(id, duration) {
  return { type: MOVE_REMEMBER, id, duration };
}

export function saveConfig(config) {
  return { type: SET_CONFIG, config };
}
