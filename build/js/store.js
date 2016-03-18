'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _reactRouter = require('react-router');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _electron = require('electron');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

_reactRouter.hashHistory.push('/app/' + (0, _utils.getPureDate)((0, _moment2.default)()).valueOf());

(0, _utils.readDatabase)().then(function (database) {
  (0, _utils.loadAll)(store.dispatch, database).then(function () {
    store.subscribe(function () {
      (0, _utils.updateDatabase)(store.getState()).catch(function (err) {
        _electron.remote.dialog.showErrorBox('Faild, Can not save database', err.toString());
      });
    });
  });
}).catch(function (err) {
  _electron.remote.dialog.showErrorBox('Faild, Can not read database', err.toString());
});

exports.default = store;
module.exports = exports['default'];