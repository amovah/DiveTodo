export const ADD_TODO = 'ADD_TODO';
export const LOAD_TODO = 'LOAD_TOOD';

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function loadTodo(todo) {
  return { type: LOAD_TODO, text: todo.text, completed: todo.completed };
}
