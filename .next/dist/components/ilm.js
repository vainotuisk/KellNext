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

var _isomorphicUnfetch = require('isomorphic-unfetch');

var _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/vaino/Proge/next/InfotablooNext/components/ilm.js';


var Ilm = function (_React$Component) {
  (0, _inherits3.default)(Ilm, _React$Component);

  function Ilm(props) {
    (0, _classCallCheck3.default)(this, Ilm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Ilm.__proto__ || (0, _getPrototypeOf2.default)(Ilm)).call(this, props));

    _this.state = { date: new Date() };
    return _this;
  }

  (0, _createClass3.default)(Ilm, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 10000);
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
      return _react2.default.createElement('div', { className: 'ilm', 'data-jsx': 3033593465,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }, _react2.default.createElement(_style2.default, {
        styleId: 3033593465,
        css: '@font-face{font-family:\'Aino\';font-style:normal;font-weight:300;src:local(\'Aino\'), local(\'Aino\'), url(\'../assets/assets/AinoHeadline.ttf\') format(\'truetype\'),}.kell[data-jsx="3033593465"]{font-family:\'Aino\';font-size:6em}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaWxtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHMEIsQUFNSixvQkFONkIsQUFNWixlQUFDLElBTmtDLGlCQUt6RSwwR0FBSyIsImZpbGUiOiJjb21wb25lbnRzL2lsbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvdmFpbm8vUHJvZ2UvbmV4dC9JbmZvdGFibG9vTmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbG0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7ZGF0ZTogbmV3IERhdGUoKX07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpbWVySUQgPSBzZXRJbnRlcnZhbChcbiAgICAgICgpID0+IHRoaXMudGljaygpLFxuICAgICAgMTAwMDBcbiAgICApO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySUQpO1xuICB9XG5cbiAgdGljaygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGRhdGU6IG5ldyBEYXRlKClcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2lsbSc+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBAZm9udC1mYWNlIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQWlubyc7XG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuXG5cbiAgICAgIHNyYzogbG9jYWwoJ0Fpbm8nKSwgbG9jYWwoJ0Fpbm8nKSxcblxuICAgICAgICAgICB1cmwoJy4uL2Fzc2V0cy9hc3NldHMvQWlub0hlYWRsaW5lLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cblxuICAgIH1cbiAgICAua2VsbCB7XG4gIGZvbnQtZmFtaWx5OiAnQWlubyc7XG4gIGZvbnQtc2l6ZTogNmVtO1xufVxuXG4gICAgYH08L3N0eWxlPlxuICAgICAgICB7dGhpcy5zdGF0ZS5kYXRlLnRvTG9jYWxlVGltZVN0cmluZygpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/ilm.js */'
      }), this.state.date.toLocaleTimeString());
    }
  }]);

  return Ilm;
}(_react2.default.Component);

exports.default = Ilm;