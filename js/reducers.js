import { combineReducers } from 'redux';
import { ADD_TODO, LOAD_TODO, REMOVE_TODO } from './actions';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case LOAD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: action.completed
        }
      ];
    case REMOVE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
}

function remembers(state = []) {
  return state;
}

const todoApp = combineReducers({
  todos,
  remembers
});

export default todoApp;
