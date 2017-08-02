'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _clock = require('../components/clock.js');

var _clock2 = _interopRequireDefault(_clock);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaino/Proge/next/InfotablooNext/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, 'Tuul P\xE4rnus'), _react2.default.createElement('ul', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, 'Kiirus:  ', props.shows.wind.speed), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, 'Suund: ', props.shows.wind.deg), _react2.default.createElement('li', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, 'Temperatuur: ', Math.round(props.shows.main.temp) - 273)), _react2.default.createElement(_clock2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }));
};

Index.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  var res, data;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0, _isomorphicUnfetch2.default)('http://api.openweathermap.org/data/2.5/weather?q=Parnu&appid=312148cec8dfac78058217072b44201e');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt('return', {
            shows: data
          });

        case 7:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, this);
}));

exports.default = Index;