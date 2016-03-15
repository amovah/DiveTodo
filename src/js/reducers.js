import { combineReducers } from 'redux';
import { unique } from 'stringing';
import moment from 'moment';
import * as actions from './actions';
import { find } from './utils';

/**
 * Todos reducer
 */

function todos(state = [], action) {
  switch(action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        {
          id: unique(32),
          text: action.text,
          completed: false,
          date: +action.date
        }
      ];
    case actions.LOAD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: action.completed,
          date: action.date,
          id: action.id
        }
      ];
    case actions.REMOVE_TODO: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }
    case actions.COMPLETE_TODO: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          completed: true
        }),
        ...state.slice(index + 1)
      ];
    }
    case actions.UNCOMPLETE_TODO: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          completed: false
        }),
        ...state.slice(index + 1)
      ];
    }
    case actions.EDIT_TODO: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          text: action.text
        }),
        ...state.slice(index + 1)
      ];
    }
    case actions.MOVE_TO_NEXT_TODO: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          date: moment(state[index].date).add(1, 'd').valueOf()
        }),
        ...state.slice(index + 1)
      ];
    }
    case actions.MOVE_TO_PREVIOUS_TODO: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          date: moment(state[index].date).subtract(1, 'd').valueOf()
        }),
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}

/**
 * Remeber reducer
 */

function remembers(state = [], action) {
  switch(action.type) {
    case actions.ADD_REMEMBER:
      return [
        ...state,
        {
          text: action.text,
          id: unique(32),
          date: +action.date
        }
      ];
    case actions.REMOVE_REMEMBER: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];
    }
    case actions.EDIT_REMEMBER: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          text: action.text
        }),
        ...state.slice(index + 1)
      ];
    }
    case actions.LOAD_REMEMBER:
      return [
        ...state,
        {
          text: action.text,
          id: action.id,
          date: action.date
        }
      ];
    case actions.MOVE_TO_NEXT_REMEMBER: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          date: moment(state[index].date).add(1, 'd').valueOf()
        }),
        ...state.slice(index + 1)
      ];
    }
    case actions.MOVE_TO_PREVIOUS_REMEMBER: {
      let index = find(state, action.id);
      return [
        ...state.slice(0, index),
        Object.assign({}, state[index], {
          date: moment(state[index].date).subtract(1, 'd').valueOf()
        }),
        ...state.slice(index + 1)
      ];
    }
    default:
      return state;
  }
}

/**
 * Modal reducer
 */

 const defaultModal = {
   className: 'modal',
   buttons: [],
   defaultValue: '',
   title: '',
   placeholder: ''
 };

function modal(state = defaultModal, action) {
  switch(action.type) {
    case actions.SHOW_MODAL:
      return Object.assign({}, state, action.modal, {
        className: 'modal active'
      });
    case actions.HIDE_MODAL:
      return defaultModal;
    default:
      return state;
  }
}

export default combineReducers({
  todos,
  remembers,
  modal
});
