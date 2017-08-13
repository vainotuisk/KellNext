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

var _weather = require('../components/weather.js');

var _weather2 = _interopRequireDefault(_weather);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaino/Proge/next/InfotablooNext/pages/index.js?entry';


var Index = function Index(props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('div', { className: 'kell', 'data-jsx': 1173651538,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 1173651538,
    css: '@font-face{font-family:\'Aino\';font-style:normal;font-weight:100;src:local(\'Aino\'), local(\'Aino\'), url(\'../assets/AinoHeadline.ttf\') format(\'truetype\'),}.kell[data-jsx="1173651538"]{font-family:\'Aino\';font-size:3em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlnQixBQUdzQixBQU1GLG9CQU51QixBQU1SLGVBQUMsSUFOMEIsaUJBSzdELCtGQUFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy92YWluby9Qcm9nZS9uZXh0L0luZm90YWJsb29OZXh0Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IENsb2NrIGZyb20gJy4uL2NvbXBvbmVudHMvY2xvY2suanMnXG5pbXBvcnQgSWxtIGZyb20gJy4uL2NvbXBvbmVudHMvaWxtLmpzJ1xuaW1wb3J0IFdlYXRoZXIgZnJvbSAnLi4vY29tcG9uZW50cy93ZWF0aGVyLmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7Um93LCBDb2x9IGZyb20gJ3JlYWN0c3RyYXAnXG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9J2tlbGwnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0Fpbm8nO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG5cblxuICBzcmM6IGxvY2FsKCdBaW5vJyksIGxvY2FsKCdBaW5vJyksXG5cbiAgICAgICB1cmwoJy4uL2Fzc2V0cy9BaW5vSGVhZGxpbmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuXG59XG4ua2VsbCB7XG5mb250LWZhbWlseTogJ0Fpbm8nO1xuZm9udC1zaXplOiAzZW07XG59XG5cbmB9PC9zdHlsZT5cbiAgICA8Um93PlxuICAgICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiPktpaXJ1czogIHtNYXRoLnJvdW5kKHByb3BzLnNob3dzLndpbmQuc3BlZWQpfW0vczwvQ29sPlxuICAgICAgICA8Q29sIHhzPVwiNlwiIHNtPVwiNFwiPlN1dW5kOiB7TWF0aC5yb3VuZChwcm9wcy5zaG93cy53aW5kLmRlZyl9PC9Db2w+XG4gICAgICAgIDxDb2wgc209XCI0XCI+VGVtcDoge01hdGgucm91bmQocHJvcHMuc2hvd3MubWFpbi50ZW1wKSAtMjczfSAmZGVnOzwvQ29sPlxuICAgIDwvUm93PlxuPC9kaXY+XG4gICAgPFJvdz5cbiAgICAgIDxDb2wgc209e3sgc2l6ZTogJ2F1dG8nLCBvZmZzZXQ6IDEgfX0+PENsb2NrLz48L0NvbD5cbiAgICA8L1Jvdz5cblxuXG5cbiAgPC9MYXlvdXQ+XG5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9UGFybnUmYXBwaWQ9MzEyMTQ4Y2VjOGRmYWM3ODA1ODIxNzA3MmI0NDIwMWUnKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4vLyAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
  }), _react2.default.createElement(_reactstrap.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_reactstrap.Col, { xs: '6', sm: '4', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, 'Kiirus:  ', Math.round(props.shows.wind.speed), 'm/s'), _react2.default.createElement(_reactstrap.Col, { xs: '6', sm: '4', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'Suund: ', Math.round(props.shows.wind.deg)), _react2.default.createElement(_reactstrap.Col, { sm: '4', __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'Temp: ', Math.round(props.shows.main.temp) - 273, ' \xB0'))), _react2.default.createElement(_reactstrap.Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, _react2.default.createElement(_reactstrap.Col, { sm: { size: 'auto', offset: 1 }, __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement(_clock2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }))));
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