'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

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