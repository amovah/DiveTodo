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
export const MOVE_TO_NEXT_REMEMBER = 'MOVE_TO_NEXT_REMEMBER';
export const MOVE_TO_PREVIOUS_REMEMBER = 'MOVE_TO_PREVIOUS_REMEMBER';
export const MOVE_TO_NEXT_TODO = 'MOVE_TO_NEXT_TODO';
export const MOVE_TO_PREVIOUS_TODO = 'MOVE_TO_PREVIOUS_TODO';

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

export function moveToNextRemember(id) {
  return { type: MOVE_TO_NEXT_REMEMBER, id };
}

export function moveToPreviousRemember(id) {
  return { type: MOVE_TO_PREVIOUS_REMEMBER, id };
}

export function moveToNextTodo(id) {
  return { type: MOVE_TO_NEXT_TODO, id };
}

export function moveToPreviousTodo(id) {
  return { type: MOVE_TO_PREVIOUS_TODO, id };
}
