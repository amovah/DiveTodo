import { combineReducers } from 'redux';
import * as actions from './actions';

function todos(state = [], action) {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case actions.LOAD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: action.completed
        }
      ];
    case actions.REMOVE_TODO:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case actions.COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action.index + 1)
      ];
    case actions.UNCOMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: false
        }),
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
