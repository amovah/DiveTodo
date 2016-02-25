'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

var actions = _interopRequireWildcard(_actions);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _database = require('../database.json');

var _database2 = _interopRequireDefault(_database);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function save(database, state) {
  var tempState = Object.assign({}, state);
  delete tempState.date;
  database[state.date] = tempState;
  var data = JSON.stringify(database, null, 2);
  var dir = __dirname.split('/').slice(0, -1).join('/');
  _fs2.default.writeFileSync(dir + '/database.json', data);
}

function init(database, date) {
  database[date] = {};
  database[date].todos = [];
  database[date].remembers = [];
}

function loadData(store, actions, database) {
  var now = store.getState().date,
      data = {
    todos: {
      database: database[now].todos,
      action: actions.loadTodo
    },
    remembers: {
      database: database[now].remembers,
      action: actions.addRemember
    }
  };

  for (var section in data) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[section].database[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        store.dispatch(data[section].action(item));
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
}

var store = (0, _redux.createStore)(_reducers2.default),
    tempDate = store.getState().date,
    clearState = undefined;

if (!_database2.default[tempDate]) {
  init(_database2.default, tempDate);
  save(_database2.default, store.getState());
} else {
  loadData(store, actions, _database2.default);
}

store.subscribe(function () {
  var state = store.getState();
  if (state.date !== tempDate) {
    tempDate = state.date;
    clearState = true;
    store.dispatch(actions.clear());

    if (_database2.default[state.date]) {
      loadData(store, actions, _database2.default);
    } else {
      init(_database2.default, state.date);
    }
  } else if (!clearState) {
    save(_database2.default, state);
  } else {
    clearState = false;
  }
});

exports.default = store;
module.exports = exports['default'];