export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO = 'LOAD_TOOD';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const UNCOMPLETE_TODO = 'UNCOMPLETE_TODO';
export const ADD_REMEMBER = 'ADD_REMEMBER';
export const EDIT_TODO = 'EDIT_TODO';
export const REMOVE_REMEMBER = 'REMOVE_REMEMBER';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function loadTodo(todo) {
  return { type: LOAD_TODO, text: todo.text, completed: todo.completed };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}

export function completeTodo(index) {
  return { type: COMPLETE_TODO, index };
}

export function uncompleteTodo(index) {
  return { type: UNCOMPLETE_TODO, index };
}

export function addRemember(text) {
  return { type: ADD_REMEMBER, text };
}

export function editTodo(text, index) {
  return { type: EDIT_TODO, text, index };
}

export function removeRemember(index) {
  return { type: REMOVE_REMEMBER, index };
}
