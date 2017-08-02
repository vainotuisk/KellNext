'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout.js');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _clock = require('../components/clock.js');

var _clock2 = _interopRequireDefault(_clock);

var _ilm = require('../components/ilm.js');

var _ilm2 = _interopRequireDefault(_ilm);

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
      lineNumber: 8
    }
  }, _react2.default.createElement('div', {
    'data-jsx': 2185114361,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 2185114361,
    css: '@font-face{font-family:\'Aino\';font-style:normal;font-weight:300;src:local(\'Aino\'), local(\'Aino\'), url(\'../assets/assets/AinoHeadline.ttf\') format(\'truetype\'),}.kell[data-jsx="2185114361"]{font-family:\'Aino\';font-size:6em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNnQixBQUdzQixBQU1GLG9CQU51QixBQU1SLGVBQUMsSUFOMEIsaUJBSzdELHNHQUFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy92YWluby9Qcm9nZS9uZXh0L0luZm90YWJsb29OZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IENsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvY2xvY2suanMnXG5pbXBvcnQgSWxtIGZyb20gJy4uL2NvbXBvbmVudHMvaWxtLmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPExheW91dD5cbiAgICA8ZGl2PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0Fpbm8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG5cblxuICBzcmM6IGxvY2FsKCdBaW5vJyksIGxvY2FsKCdBaW5vJyksXG5cbiAgICAgICB1cmwoJy4uL2Fzc2V0cy9hc3NldHMvQWlub0hlYWRsaW5lLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cblxufVxuLmtlbGwge1xuZm9udC1mYW1pbHk6ICdBaW5vJztcbmZvbnQtc2l6ZTogNmVtO1xufVxuXG5gfTwvc3R5bGU+XG5cblxuICAgIEtpaXJ1czogIHtwcm9wcy5zaG93cy53aW5kLnNwZWVkfVxuICAgIFN1dW5kOiB7cHJvcHMuc2hvd3Mud2luZC5kZWd9XG4gICAgVGVtcGVyYXR1dXI6IHtNYXRoLnJvdW5kKHByb3BzLnNob3dzLm1haW4udGVtcCkgLTI3M31cbjwvZGl2PlxuICAgIDxDbG9jay8+XG4gICAgPElsbS8+XG4gIDwvTGF5b3V0PlxuXG4pXG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVBhcm51JmFwcGlkPTMxMjE0OGNlYzhkZmFjNzgwNTgyMTcwNzJiNDQyMDFlJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuLy8gIGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YClcblxuICByZXR1cm4ge1xuICAgIHNob3dzOiBkYXRhXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
  }), 'Kiirus:  ', props.shows.wind.speed, 'Suund: ', props.shows.wind.deg, 'Temperatuur: ', Math.round(props.shows.main.temp) - 273), _react2.default.createElement(_clock2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement(_ilm2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
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