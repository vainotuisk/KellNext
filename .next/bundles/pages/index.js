
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(64);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(548);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _clock = __webpack_require__(549);

var _clock2 = _interopRequireDefault(_clock);

var _link = __webpack_require__(541);

var _link2 = _interopRequireDefault(_link);

var _isomorphicUnfetch = __webpack_require__(546);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vaino/Proge/next/InfotablooNext/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vaino/Proge/next/InfotablooNext/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(541);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/vaino/Proge/next/InfotablooNext/components/Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Home")), _react2.default.createElement(_link2.default, { href: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "About")));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vaino/Proge/next/InfotablooNext/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vaino/Proge/next/InfotablooNext/components/Header.js"); } } })();

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(542);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(547);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaino/Proge/next/InfotablooNext/components/MyLayout.js';


var layoutStyle = {
  margin: 20,
  padding: 20
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, 'data-jsx': 4080244433,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement(_style2.default, {
    styleId: 4080244433,
    css: 'body{background:black;color:white;font-family:sans-serif}@font-face{font-family:\'Aino\';font-style:normal;font-weight:600;src:local(\'Aino\'), local(\'Aino\'), url(\'../assets/assets/AinoHeadline.ttf\') format(\'truetype\'),}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU3VCLEFBRzhCLEFBQ0osa0JBRDZCLEVBQ0osV0FEd0MsUUFDakIsZ0JBRDRCLENBS3JHLDBHQUFLIiwiZmlsZSI6ImNvbXBvbmVudHMvTXlMYXlvdXQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhaW5vL1Byb2dlL25leHQvSW5mb3RhYmxvb05leHQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgbWFyZ2luOiAyMCxcbiAgcGFkZGluZzogMjAsXG59XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6ICdBaW5vJztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgIHNyYzogbG9jYWwoJ0Fpbm8nKSwgbG9jYWwoJ0Fpbm8nKSxcblxuICAgICAgICAgICB1cmwoJy4uL2Fzc2V0cy9hc3NldHMvQWlub0hlYWRsaW5lLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cblxuICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDxIZWFkZXIgLz5cblxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIl19 */\n/*@ sourceURL=components/MyLayout.js */'
  }), _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vaino/Proge/next/InfotablooNext/components/MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vaino/Proge/next/InfotablooNext/components/MyLayout.js"); } } })();

/***/ }),

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(36);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(39);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(38);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(542);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaino/Proge/next/InfotablooNext/components/clock.js';


var Clock = function (_React$Component) {
  (0, _inherits3.default)(Clock, _React$Component);

  function Clock(props) {
    (0, _classCallCheck3.default)(this, Clock);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Clock.__proto__ || (0, _getPrototypeOf2.default)(Clock)).call(this, props));

    _this.state = { date: new Date() };
    return _this;
  }

  (0, _createClass3.default)(Clock, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({
        date: new Date()
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { className: 'kell', 'data-jsx': 3033593465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 3033593465,
        css: '@font-face{font-family:\'Aino\';font-style:normal;font-weight:300;src:local(\'Aino\'), local(\'Aino\'), url(\'../assets/assets/AinoHeadline.ttf\') format(\'truetype\'),}.kell[data-jsx="3033593465"]{font-family:\'Aino\';font-size:6em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUcwQixBQU1KLG9CQU42QixBQU1aLGVBQUMsSUFOa0MsaUJBS3pFLDBHQUFLIiwiZmlsZSI6ImNvbXBvbmVudHMvY2xvY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhaW5vL1Byb2dlL25leHQvSW5mb3RhYmxvb05leHQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7ZGF0ZTogbmV3IERhdGUoKX07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpbWVySUQgPSBzZXRJbnRlcnZhbChcbiAgICAgICgpID0+IHRoaXMudGljaygpLFxuICAgICAgMTAwMFxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XG4gIH1cblxuICB0aWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0ZTogbmV3IERhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0na2VsbCc+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQWlubyc7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuXG5cbiAgICAgIHNyYzogbG9jYWwoJ0Fpbm8nKSwgbG9jYWwoJ0Fpbm8nKSxcblxuICAgICAgICAgICB1cmwoJy4uL2Fzc2V0cy9hc3NldHMvQWlub0hlYWRsaW5lLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cblxuICAgIH1cbiAgICAua2VsbCB7XG4gIGZvbnQtZmFtaWx5OiAnQWlubyc7XG4gIGZvbnQtc2l6ZTogNmVtO1xufVxuXG4gICAgYH08L3N0eWxlPlxuICAgICAgICB7dGhpcy5zdGF0ZS5kYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/clock.js */'
      }), this.state.date.toLocaleTimeString());
    }
  }]);

  return Clock;
}(_react2.default.Component);

exports.default = Clock;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/vaino/Proge/next/InfotablooNext/components/clock.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/vaino/Proge/next/InfotablooNext/components/clock.js"); } } })();

/***/ }),

/***/ 550:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(543);


/***/ })

},[550]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzhmODQ0NTQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/OGY4NDQ1NCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzhmODQ0NTQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jbG9jay5qcz84Zjg0NDU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBDbG9jayBmcm9tICcuLi9jb21wb25lbnRzL2Nsb2NrLmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbiAgPExheW91dD5cbiAgICA8aDE+VHV1bCBQw6RybnVzPC9oMT5cbiAgICA8dWw+XG4gICAgPGxpPktpaXJ1czogIHtwcm9wcy5zaG93cy53aW5kLnNwZWVkfTwvbGk+XG4gICAgPGxpPlN1dW5kOiB7cHJvcHMuc2hvd3Mud2luZC5kZWd9PC9saT5cbiAgICA8bGk+VGVtcGVyYXR1dXI6IHtNYXRoLnJvdW5kKHByb3BzLnNob3dzLm1haW4udGVtcCkgLTI3M308L2xpPlxuICAgIDwvdWw+XG4gICAgPENsb2NrLz5cbiAgPC9MYXlvdXQ+XG5cbilcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9UGFybnUmYXBwaWQ9MzEyMTQ4Y2VjOGRmYWM3ODA1ODIxNzA3MmI0NDIwMWUnKVxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4vLyAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4gIHJldHVybiB7XG4gICAgc2hvd3M6IGRhdGFcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmNvbnN0IGxpbmtTdHlsZSA9IHtcbiAgbWFyZ2luUmlnaHQ6IDE1XG59XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhIHN0eWxlPXtsaW5rU3R5bGV9PkFib3V0PC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9IZWFkZXIuanMiLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5jb25zdCBsYXlvdXRTdHlsZSA9IHtcbiAgbWFyZ2luOiAyMCxcbiAgcGFkZGluZzogMjAsXG59XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6ICdBaW5vJztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgICAgIHNyYzogbG9jYWwoJ0Fpbm8nKSwgbG9jYWwoJ0Fpbm8nKSxcblxuICAgICAgICAgICB1cmwoJy4uL2Fzc2V0cy9hc3NldHMvQWlub0hlYWRsaW5lLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cblxuICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgIDxIZWFkZXIgLz5cblxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb2NrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtkYXRlOiBuZXcgRGF0ZSgpfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMudGltZXJJRCA9IHNldEludGVydmFsKFxuICAgICAgKCkgPT4gdGhpcy50aWNrKCksXG4gICAgICAxMDAwXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcklEKTtcbiAgfVxuXG4gIHRpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBkYXRlOiBuZXcgRGF0ZSgpXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdrZWxsJz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6ICdBaW5vJztcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG5cblxuICAgICAgc3JjOiBsb2NhbCgnQWlubycpLCBsb2NhbCgnQWlubycpLFxuXG4gICAgICAgICAgIHVybCgnLi4vYXNzZXRzL2Fzc2V0cy9BaW5vSGVhZGxpbmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuXG4gICAgfVxuICAgIC5rZWxsIHtcbiAgZm9udC1mYW1pbHk6ICdBaW5vJztcbiAgZm9udC1zaXplOiA2ZW07XG59XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIHt0aGlzLnN0YXRlLmRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2Nsb2NrLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBQ0E7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFGQTs7QUFPQTtBQUFBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0JBO0FBbEJBOztBQWtCQTtBQUVBO0FBRkE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBOzs7O0FBT0E7QUFBQTs7OztBQUlBO0FBQUE7QUFDQTtBQUFBOzs7O0FBS0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJBO0FBbkJBOzs7OztBQXpCQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        