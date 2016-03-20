'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _stringing = require('stringing');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _utils = require('./utils');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Todos reducer
 */

function todos() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case actions.ADD_TODO:
      return [].concat(_toConsumableArray(state), [{
        id: (0, _stringing.unique)(32),
        text: action.text,
        completed: false,
        date: +action.date
      }]);
    case actions.LOAD_TODO:
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        completed: action.completed,
        date: action.date,
        id: action.id
      }]);
    case actions.REMOVE_TODO:
      {
        var index = (0, _utils.find)(state, action.id);
        return [].concat(_toConsumableArray(state.slice(0, index)), _toConsumableArray(state.slice(index + 1)));
      }
    case actions.COMPLETE_TODO:
      {
        var _index = (0, _utils.find)(state, action.id);
        return [].concat(_toConsumableArray(state.slice(0, _index)), [Object.assign({}, state[_index], {
          completed: true
        })], _toConsumableArray(state.slice(_index + 1)));
      }
    case actions.UNCOMPLETE_TODO:
      {
        var _index2 = (0, _utils.find)(state, action.id);
        return [].concat(_toConsumableArray(state.slice(0, _index2)), [Object.assign({}, state[_index2], {
          completed: false
        })], _toConsumableArray(state.slice(_index2 + 1)));
      }
    case actions.EDIT_TODO:
      {
        var _index3 = (0, _utils.find)(state, action.id);
        return [].concat(_toConsumableArray(state.slice(0, _index3)), [Object.assign({}, state[_index3], {
          text: action.text
        })], _toConsumableArray(state.slice(_index3 + 1)));
      }
    case actions.MOVE_TODO:
      {
        var _index4 = (0, _utils.find)(state, action.id);
        var date = (0, _moment2.default)(state[_index4].date).add(action.duration, 'd').startOf('day').valueOf();
        return [].concat(_toConsumableArray(state.slice(0, _index4)), [Object.assign({}, state[_index4], {
          date: date
        })], _toConsumableArray(state.slice(_index4 + 1)));
      }
    default:
      return state;
  }
}

/**
 * Remeber reducer
 */

function remembers() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case actions.ADD_REMEMBER:
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        id: (0, _stringing.unique)(32),
        date: +action.date
      }]);
    case actions.REMOVE_REMEMBER:
      {
        var index = (0, _utils.find)(state, action.id);
        return [].concat(_toConsumableArray(state.slice(0, index)), _toConsumableArray(state.slice(index + 1)));
      }
    case actions.EDIT_REMEMBER:
      {
        var _index5 = (0, _utils.find)(state, action.id);
        return [].concat(_toConsumableArray(state.slice(0, _index5)), [Object.assign({}, state[_index5], {
          text: action.text
        })], _toConsumableArray(state.slice(_index5 + 1)));
      }
    case actions.LOAD_REMEMBER:
      return [].concat(_toConsumableArray(state), [{
        text: action.text,
        id: action.id,
        date: action.date
      }]);
    case actions.MOVE_REMEMBER:
      {
        var _index6 = (0, _utils.find)(state, action.id);
        var date = (0, _moment2.default)(state[_index6].date).add(action.duration, 'd').startOf('day').valueOf();
        return [].concat(_toConsumableArray(state.slice(0, _index6)), [Object.assign({}, state[_index6], {
          date: date
        })], _toConsumableArray(state.slice(_index6 + 1)));
      }
    default:
      return state;
  }
}

/**
 * Modal reducer
 */

var defaultModal = {
  className: 'modal',
  buttons: [],
  defaultValue: '',
  title: '',
  placeholder: ''
};

function modal() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? defaultModal : arguments[0];
  var action = arguments[1];

  switch (action.type) {
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

/**
 * Config reducer
 */

function config() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {
    todos: actions.CONFIG_REMOVE,
    remembers: actions.CONFIG_REMOVE
  } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case actions.SET_CONFIG:
      return action.config;
    default:
      return state;
  }
}

exports.default = (0, _redux.combineReducers)({
  todos: todos,
  remembers: remembers,
  modal: modal,
  config: config
});
module.exports = exports['default'];