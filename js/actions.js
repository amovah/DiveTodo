export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO = 'LOAD_TOOD';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function loadTodo(todo) {
  return { type: LOAD_TODO, text: todo.text, completed: todo.completed };
}

export function removeTodo(index) {
  return { type: REMOVE_TODO, index };
}
