'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.updateDatabase = updateDatabase;
exports.readDatabase = readDatabase;
exports.find = find;
exports.getPureDate = getPureDate;

var _fs = require('fs');

var DATABASE = __dirname.split('/').slice(0, -1).join('/') + '/database.json';

function updateDatabase(database) {
  (0, _fs.writeFileSync)(DATABASE, JSON.stringify({
    todos: database.todos,
    remembers: database.remembers
  }, null, 2));
}

function readDatabase() {
  return new Promise(function (resolve) {
    (0, _fs.readFile)(DATABASE, function (err, file) {
      resolve(JSON.parse(file));
    });
  });
}

function find(state, id) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = state.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _step$value = _slicedToArray(_step.value, 2);

      var index = _step$value[0];
      var item = _step$value[1];

      if (item.id === id) {
        return index;
      }
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

function getPureDate(date) {
  date.millisecond(0);
  date.second(0);
  date.minute(0);
  date.hour(0);

  return date;
}