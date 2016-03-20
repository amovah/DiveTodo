'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _electron = require('electron');

var _store = require('../store');

var _utils = require('../utils');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Settings = function (_Component) {
  _inherits(Settings, _Component);

  function Settings() {
    _classCallCheck(this, Settings);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Settings).call(this));

    _this.saveConfig = _this.saveConfig.bind(_this);
    return _this;
  }

  _createClass(Settings, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      switch (this.props.todos) {
        case _actions.CONFIG_REMOVE:
          this.refs.r_todos.setAttribute('checked', true);
          break;
        case _actions.CONFIG_KEEP:
          this.refs.k_todos.setAttribute('checked', true);
          break;
        case _actions.CONFIG_MOVE:
          this.refs.m_todos.setAttribute('checked', true);
          break;
      }

      switch (this.props.remembers) {
        case _actions.CONFIG_MOVE:
          this.refs.m_remembers.setAttribute('checked', true);
          break;
        case _actions.CONFIG_REMOVE:
          this.refs.r_remembers.setAttribute('checked', true);
          break;
      }
    }
  }, {
    key: 'saveConfig',
    value: function saveConfig() {
      var config = { todos: 0, remembers: 0 };
      var _arr = ['r_todos', 'm_todos', 'k_todos'];
      for (var _i = 0; _i < _arr.length; _i++) {
        var el = _arr[_i];
        if (this.refs[el].checked) {
          config.todos = parseInt(this.refs[el].value);
          break;
        }
      }

      var _arr2 = ['r_remembers', 'k_remembers'];
      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var _el = _arr2[_i2];
        if (this.refs[_el].checked) {
          config.remembers = parseInt(this.refs[_el].value);
          break;
        }
      }

      this.props.dispatch((0, _actions.saveConfig)(config));
    }
  }, {
    key: 'exportDB',
    value: function exportDB() {
      _electron.remote.dialog.showSaveDialog(function (path) {
        (0, _utils.readDatabase)().then(function (database) {
          (0, _utils.write)(path, JSON.stringify(database)).then(function () {
            _electron.remote.dialog.showMessageBox({
              title: '',
              message: 'Successfully',
              detail: 'Database exported successfully on ' + path,
              buttons: [],
              type: 'info'
            });
          }).catch(function (err) {
            _electron.remote.dialog.showErrorBox('Faild, Can not write file', err.toString());
          });
        });
      });
    }
  }, {
    key: 'importDB',
    value: function importDB() {
      _electron.remote.dialog.showOpenDialog({ properties: ['openFile'] }, function (path) {
        (0, _utils.read)(path[0], 'utf8').then(function (file) {
          var database = JSON.parse(file);
          (0, _utils.loadAll)(_store.dispatch, database).then(function () {
            _electron.remote.dialog.showMessageBox({
              title: '',
              message: 'Successfully',
              detail: 'Database imported successfully from ' + path,
              buttons: [],
              type: 'info'
            });
          });
        }).catch(function (err) {
          _electron.remote.dialog.showErrorBox('Faild, Can not read database', err.toString());
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            'Out-of-date todos'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'r_todos' },
              'Remove out-of-date todos.'
            ),
            _react2.default.createElement('input', { name: 'oodt', id: 'r_todos', type: 'radio', value: '0',
              ref: 'r_todos' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'n_todos' },
              'Keep them and do not remove them.'
            ),
            _react2.default.createElement('input', { name: 'oodt', id: 'n_todos', type: 'radio', value: '1',
              ref: 'k_todos' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'm_todos' },
              'Automove out-of-date uncompleted todos to current day and remove completed todos.'
            ),
            _react2.default.createElement('input', { name: 'oodt', id: 'm_todos', type: 'radio', value: '2',
              ref: 'm_todos' })
          ),
          _react2.default.createElement(
            'h4',
            null,
            'Out-of-date remembers'
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'r_remembers' },
              'Remove out-of-date remembers.'
            ),
            _react2.default.createElement('input', { name: 'oodr', id: 'r_remembers', type: 'radio', value: '0',
              ref: 'r_remembers' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'k_remembers' },
              'Keep them and do not remove them.'
            ),
            _react2.default.createElement('input', { name: 'oodr', id: 'k_remembers', type: 'radio', value: '1',
              ref: 'k_remembers' })
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              'button',
              {
                className: 'btn',
                onClick: function onClick() {
                  _this2.saveConfig();
                } },
              'Save'
            )
          ),
          _react2.default.createElement('span', { className: 'seperator' }),
          _react2.default.createElement(
            'h4',
            null,
            'Export & Import Settings and Database'
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn',
              onClick: function onClick() {
                _this2.exportDB();
              } },
            'Export'
          ),
          _react2.default.createElement(
            'button',
            {
              className: 'btn',
              onClick: function onClick() {
                _this2.importDB();
              } },
            'Import'
          )
        )
      );
    }
  }]);

  return Settings;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state.config;
})(Settings);
module.exports = exports['default'];