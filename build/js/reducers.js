'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _actions = require('./actions');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function todos() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _actions.ADD_TODO:
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        completed: false
      }]);
    case _actions.LOAD_TODO:
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        completed: action.completed
      }]);
    default:
      return state;
  }
}

function remembers() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return state;
}

var todoApp = (0, _redux.combineReducers)({
  todos: todos,
  remembers: remembers
});

exports.default = todoApp;
