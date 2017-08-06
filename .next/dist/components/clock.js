'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

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
      return _react2.default.createElement('div', { className: 'kell', 'data-jsx': 3995654229,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 3995654229,
        css: '@font-face{font-family:\'Aino\';font-style:normal;font-weight:300;src:local(\'Aino\'), local(\'Aino\'), url(\'../assets/AinoHeadline.ttf\') format(\'truetype\'),}.kell[data-jsx="3995654229"]{font-family:\'Aino\';font-size:6em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2xvY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJvQixBQUcwQixBQU1KLG9CQU42QixBQU1aLGVBQUMsSUFOa0MsaUJBS3pFLG1HQUFLIiwiZmlsZSI6ImNvbXBvbmVudHMvY2xvY2suanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3ZhaW5vL1Byb2dlL25leHQvSW5mb3RhYmxvb05leHQiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9jayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7ZGF0ZTogbmV3IERhdGUoKX07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpbWVySUQgPSBzZXRJbnRlcnZhbChcbiAgICAgICgpID0+IHRoaXMudGljaygpLFxuICAgICAgMTAwMFxuICAgICk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJRCk7XG4gIH1cblxuICB0aWNrKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgZGF0ZTogbmV3IERhdGUoKVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0na2VsbCc+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQWlubyc7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuXG5cbiAgICAgIHNyYzogbG9jYWwoJ0Fpbm8nKSwgbG9jYWwoJ0Fpbm8nKSxcblxuICAgICAgICAgICB1cmwoJy4uL2Fzc2V0cy9BaW5vSGVhZGxpbmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuXG4gICAgfVxuICAgIC5rZWxsIHtcbiAgZm9udC1mYW1pbHk6ICdBaW5vJztcbiAgZm9udC1zaXplOiA2ZW07XG59XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgIHt0aGlzLnN0YXRlLmRhdGUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/clock.js */'
      }), this.state.date.toLocaleTimeString());
    }
  }]);

  return Clock;
}(_react2.default.Component);

exports.default = Clock;