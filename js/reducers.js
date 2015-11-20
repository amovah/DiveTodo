import { combineReducers } from 'redux';
import { ADD_TODO, LOAD_TODO } from './actions';

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
