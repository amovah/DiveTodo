export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO = 'LOAD_TOOD';
export const REMOVE_TODO = 'REMOVE_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const UNCOMPLETE_TODO = 'UNCOMPLETE_TODO';

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
