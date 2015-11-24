'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function todos() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case actions.ADD_TODO:
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        completed: false
      }]);
    case actions.LOAD_TODO:
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        completed: action.completed
      }]);
    case actions.REMOVE_TODO:
      return [].concat(_toConsumableArray(state.slice(0, action.index)), _toConsumableArray(state.slice(action.index + 1)));
    case actions.COMPLETE_TODO:
      return [].concat(_toConsumableArray(state.slice(0, action.index)), [Object.assign({}, state[action.index], {
        completed: true
      })], _toConsumableArray(state.slice(action.index + 1)));
    case actions.UNCOMPLETE_TODO:
      return [].concat(_toConsumableArray(state.slice(0, action.index)), [Object.assign({}, state[action.index], {
        completed: false
      })], _toConsumableArray(state.slice(action.index + 1)));
    default:
      return state;
  }
}

function remembers() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case actions.ADD_REMEMBER:
      return [].concat(_toConsumableArray(state), [action.text]);
    default:
      return state;
  }
}

var todoApp = (0, _redux.combineReducers)({
  todos: todos,
  remembers: remembers
});

exports.default = todoApp;
